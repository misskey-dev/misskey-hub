#!/bin/bash
# Copyright 2021 aqz/tamaina, joinmisskey
#
# Permission is hereby granted, free of charge, to any person
# obtaining a copy of this software and associated documentation files (the "Software"),
# to deal in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
# and to permit persons to whom the Software is furnished to do so,
# subject to the following conditions:
#
# The above copyright notice and this permission notice
# shall be included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
# INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
# IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
# DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
#
version="1.2.0";

tput setaf 4;
echo "";
echo "Misskey auto setup for Ubuntu";
echo " v$version";
echo "";

#region initial check
tput setaf 2;
echo "Check: Linux;"
if [ "$(command -v uname)" ]; then
	if [ "$(uname -s)" == "Linux" ]; then
		tput setaf 7;
		echo "	OK.";
		if ! [ -f "/etc/lsb-release" ]; then
			echo "	Warning: This script has been tested on Ubuntu and may not work on other distributions.";
		fi
	else
		tput setaf 1;
		echo "	NG.";
		exit 1;
	fi
else
	tput setaf 1;
	echo "	NG.";
	exit 1;
fi

tput setaf 2;
echo "Check: root user;";
if [ "$(whoami)" != 'root' ]; then
	tput setaf 1;
	echo "	NG. This script must be run as root.";
	exit 1;
else
	tput setaf 7;
	echo "	OK. I am root user.";
fi

tput setaf 2;
echo "Check: arch;";
case $(uname -m) in
	x86_64)
		tput setaf 7;
		echo "	x86_64 (amd64)";
		arch=amd64;
		;;
	aarch64)
		tput setaf 7;
		echo "	aarch64 (arm64)";
		arch=arm64;
		;;
	*)
		tput setaf 1;
		echo "	NG. $(uname -m) is unsupported architecture.";
		exit 1;
		;;
esac
#endregion

#region user input
#region method
tput setaf 3;
echo "";
echo "Install Method";
tput setaf 7;
echo "Do you use systemd to run Misskey?:";
echo "Y = To use systemd / n = To use docker"
read -r -p "[Y/n] > " yn
case "$yn" in
	[Nn]|[Nn][Oo])
		echo "Use Docker.";
		method=docker;

		echo "Determine the local IP of this computer as docker host.";
		echo "The IPs that are supposed to be available are as follows (the result of hostname -I)";
		echo "	$(hostname -I)"
		read -r -p "> " -e -i "$(hostname -I | cut -f1 -d' ')" docker_host_ip;

		echo "The host name of docker host to bind with 'docker run --add-host='.";
		read -r -p "> " -e -i "docker_host" misskey_localhost;
		;;
	*)
		echo "Use Systemd.";
		method=systemd;
		misskey_localhost=localhost
		;;
esac
#endregion

if [ $method == "docker" ]; then
	if [ $arch == "amd64" ]; then
		echo "Do you use image from Docker Hub?:";
		echo "Y = To use Docker Hub image / N = To build Docker image in this machine"
		read -r -p "[Y/n] > " yn
		case "$yn" in
			[Nn]|[Nn][Oo])
				echo "Build docker image (local/misskey:latest).";
				method=docker;
				docker_repository="local/misskey:latest"
				;;
			*)
				echo "Use Docker Hub image.";
				method=docker_hub;
				echo "Enter repository:tag of Docker Hub image:"
				read -r -p "> " -e -i "misskey/misskey:latest" docker_repository;
				;;
		esac
	else
		echo "We should build docker manually because this is arm64 machine.";
		method=docker;
	fi

fi

tput setaf 3;
echo "Misskey setting";
tput setaf 7;
misskey_directory=misskey

if [ $method != "docker_hub" ]; then
	echo "Repository url where you want to install:"
	read -r -p "> " -e -i "https://github.com/misskey-dev/misskey.git" repository;
	echo "The name of a new directory to clone:"
	read -r -p "> " -e -i "misskey" misskey_directory;
	echo "Branch or Tag"
	read -r -p "> " -e -i "master" branch;
fi

tput setaf 3;
echo "";
echo "Enter the name of user with which you want to execute Misskey:";
tput setaf 7;
read -r -p "> " -e -i "misskey" misskey_user;

tput setaf 3;
echo "";
echo "Enter host where you want to install Misskey:";
tput setaf 7;
read -r -p "> " -e -i "example.com" host;
tput setaf 7;
hostarr=(${host//./ });
echo "OK, let's install $host!";

#region nginx
tput setaf 3;
echo "";
echo "Nginx setting";
tput setaf 7;
echo "Do you want to setup nginx?:";
read -r -p "[Y/n] > " yn
case "$yn" in
	[Nn]|[Nn][Oo])
		echo "Nginx and Let's encrypt certificate will not be installed.";
		echo "You should open ports manually.";
		nginx_local=false;
		cloudflare=false;

		echo "Misskey port: ";
		read -r -p "> " -e -i "3000" misskey_port;
		;;
	*)
		echo "Nginx will be installed on this computer.";
		echo "Port 80 and 443 will be opened by modifying iptables.";
		nginx_local=true;

		misskey_port=3000;

		tput setaf 3;
		echo "";
		tput setaf 7;
		echo "Do you use ufw or iptables?:";
		echo "Y = To use ufw / N = To use iptables";

		read -r -p "[Y/n] > " yn2
		case "$yn2" in
			[Nn]|[Nn][Oo])
				echo "OK, it will use iptables.";
				ufw=false
				;;
			*)
				echo "OK, it will use ufw.";
				ufw=true
				echo "SSH port: ";
				read -r -p "> " -e -i "22" ssh_port;
				;;
			esac

		#region cloudflare
		tput setaf 3;
		echo "";
		echo "Cloudflare setting";
		tput setaf 7;
		echo "Do you use Cloudflare?:";

		read -r -p "[Y/n] > " yn2
		case "$yn2" in
			[Nn]|[Nn][Oo])
				echo "OK, you don't use Cloudflare.";
				echo "Let's encrypt certificate will be installed using the method without Cloudflare.";
				echo "";
				echo "Make sure that your DNS is configured to this machine.";
				cloudflare=false

				echo "";
				echo "Enter Email address to register Let's Encrypt certificate";
				read -r -p "> " cf_mail;
				;;
			*)
				cloudflare=true
				echo "OK, you want to use Cloudflare. Let's set up Cloudflare.";
				echo "";
				echo "Make sure that Cloudflare DNS is configured and is in proxy mode.";
				echo "";
				echo "Enter Email address you registered to Cloudflare:";
				read -r -p "> " cf_mail;
				echo "Open https://dash.cloudflare.com/profile/api-tokens to get Global API Key and enter here it.";
				echo "Cloudflare API Key: ";
				read -r -p "> " cf_key;

				mkdir -p /etc/cloudflare;
				cat > /etc/cloudflare/cloudflare.ini <<-_EOF
				dns_cloudflare_email = $cf_mail
				dns_cloudflare_api_key = $cf_key
				_EOF

				chmod 600 /etc/cloudflare/cloudflare.ini;
				#endregion
				;;
			esac
		;;
esac
#endregion

#region postgres
tput setaf 3;
echo "";
echo "Database (PostgreSQL) setting";
tput setaf 7;
echo "Do you want to install postgres locally?:";
echo "(If you have run this script before in this computer, choose n and enter values you have set.)"
read -r -p "[Y/n] > " yn
case "$yn" in
	[Nn]|[Nn][Oo])
		echo "You should prepare postgres manually until database is created.";
		db_local=false;

		echo "Database host: ";
		read -r -p "> " -e -i "$misskey_localhost" db_host;
		echo "Database port:";
		read -r -p "> " -e -i "5432" db_port;
		;;
	*)
		echo "PostgreSQL will be installed on this computer at $misskey_localhost:5432.";
		db_local=true;

		db_host=$misskey_localhost;
		db_port=5432;
		;;
esac

echo "Database user name: ";
read -r -p "> " -e -i "misskey" db_user;
echo "Database user password: ";
read -r -p "> " db_pass;
echo "Database name:";
read -r -p "> " -e -i "mk1" db_name;
#endregion

#region redis
tput setaf 3;
echo "";
echo "Redis setting";
tput setaf 7;
echo "Do you want to install redis locally?:";
echo "(If you have run this script before in this computer, choose n and enter values you have set.)"
read -r -p "[Y/n] > " yn
case "$yn" in
	[Nn]|[Nn][Oo])
		echo "You should prepare Redis manually.";
		redis_local=false;

		echo "Redis host:";
		read -r -p "> " -e -i "$misskey_localhost" redis_host;
		echo "Redis port:";
		read -r -p "> " -e -i "6379" redis_port;
		;;
	*)
		echo "Redis will be installed on this computer at $misskey_localhost:6379.";
		redis_local=true;

		redis_host=$misskey_localhost;
		redis_port=6379;
		;;
esac

echo "Redis password:";
read -r -p "> " redis_pass;
#endregion

#region syslog
tput setaf 3;
echo "";
echo "Syslog setting";
tput setaf 7;
echo "Syslog host: ";
read -r -p "> " -e -i "$misskey_localhost" syslog_host;
echo "Syslog port: ";
read -r -p "> " -e -i "514" syslog_port;
#endregion

tput setaf 7;
echo "";
echo "OK. It will automatically install what you need. This will take some time.";
echo "";
#endregion

set -eu;

tput setaf 2;
echo "Check: Memory;"
mem_all=$(free -t --si -g | tail -n 1);
mem_allarr=(${mem_all//\\t/ });
if [ "${mem_allarr[1]}" -ge 2 ]; then
	tput setaf 7;
	echo "	OK. This computer has ${mem_allarr[1]}GB RAM.";
else
	tput setaf 1;
	echo "	NG. This computer doesn't have enough RAM (>= 2GB, Current ${mem_allarr[1]}GB).";
	tput setaf 7;
	mem_swap=$(free | tail -n 1);
	mem_swaparr=(${mem_swap//\\t/ });
	if [ "${mem_swaparr[1]}" -eq 0 ]; then
		echo "	Swap will be made (1M x 1536).";
		dd if=/dev/zero of=/swap bs=1M count=1536;
		mkswap /swap;
		swapon /swap;
		echo "/swap none swap sw 0" >> /etc/fstab;
		free -t;
	else
		echo "  Add more swaps!";
		exit 1;
	fi
fi

tput setaf 3;
echo "Process: add misskey user ($misskey_user);";
tput setaf 7;
if cut -d: -f1 /etc/passwd | grep -q -x "$misskey_user"; then
	echo "$misskey_user exisits already. No user will be created.";
else
	useradd -m -U -s /bin/bash "$misskey_user";
fi
echo "misskey_user=\"$misskey_user\"" > /root/.misskey.env
echo "version=\"$version\"" >> /root/.misskey.env
m_uid=$(id -u "$misskey_user")

tput setaf 3;
echo "Process: apt install #1;";
tput setaf 7;
apt update -y;
apt install -y curl nano jq gnupg2 apt-transport-https ca-certificates lsb-release software-properties-common uidmap$($nginx_local && echo " certbot")$($nginx_local && ($ufw && echo " ufw" || echo " iptables-persistent"))$($cloudflare && echo " python3-certbot-dns-cloudflare")$([ $method != "docker_hub" ] && echo " git")$([ $method == "systemd" ] && echo " ffmpeg build-essential");

if [ $method != "docker_hub" ]; then
#region work with misskey user
su "$misskey_user" << MKEOF
set -eu;
cd ~;
tput setaf 3;
echo "Process: git clone;";
tput setaf 7;
if [ -e "./$misskey_directory" ]; then
	if [ -f "./$misskey_directory" ]; then
		rm "./$misskey_directory";
	else
		rm -rf "./$misskey_directory";
	fi
fi
git clone -b "$branch" --depth 1 --recursive "$repository" "$misskey_directory";
MKEOF
#endregion
else
#region work with misskey user
su "$misskey_user" << MKEOF
set -eu;
cd ~;
if [ -e "./$misskey_directory" ]; then
	if [ -f "./$misskey_directory" ]; then
		rm "./$misskey_directory";
	fi
else
	mkdir "./$misskey_directory"
fi
if [ -e "./$misskey_directory/.config" ]; then
	if [ -f "./$misskey_directory/.config" ]; then
		rm "./$misskey_directory/.config";
	fi
else
	mkdir "./$misskey_directory/.config"
fi
MKEOF
#endregion
fi

tput setaf 3;
echo "Process: write default.yml;";
tput setaf 7;
#region work with misskey user
su "$misskey_user" << MKEOF
set -eu;
cd ~;

tput setaf 3;
echo "Process: create default.yml;"
tput setaf 7;

cat > "$misskey_directory/.config/default.yml" << _EOF
url: https://$host
port: $misskey_port

# PostgreSQL
db:
  host: '$db_host'
  port: $db_port
  db  : '$db_name'
  user: '$db_user'
  pass: '$db_pass'

# Redis
redis:
  host: '$redis_host'
  port: $redis_port
  pass: '$redis_pass'

# ID type
id: 'aid'

# syslog
syslog:
  host: '$syslog_host'
  port: '$syslog_port'
_EOF
MKEOF
#endregion

if $nginx_local; then
	tput setaf 3;
	echo "Process: port open;"
	tput setaf 7;

	if $ufw; then
		ufw limit $ssh_port/tcp;
		ufw default deny;
		ufw allow 80;
		ufw allow 443;
		ufw --force enable;
		ufw status;
	else
		grep -q -x -e "-A INPUT -p tcp -m tcp --dport 80 -j ACCEPT" /etc/iptables/rules.v4 || iptables -I INPUT -p tcp --dport 80 -j ACCEPT;
		grep -q -x -e "-A INPUT -p tcp -m tcp --dport 443 -j ACCEPT" /etc/iptables/rules.v4 || iptables -I INPUT -p tcp --dport 443 -j ACCEPT;
		grep -q -x -e "-A INPUT -p tcp -m tcp --dport 80 -j ACCEPT" /etc/iptables/rules.v6 || ip6tables -I INPUT -p tcp --dport 80 -j ACCEPT;
		grep -q -x -e "-A INPUT -p tcp -m tcp --dport 443 -j ACCEPT" /etc/iptables/rules.v6 || ip6tables -I INPUT -p tcp --dport 443 -j ACCEPT;

		netfilter-persistent save;
		netfilter-persistent reload;
	fi

	tput setaf 3;
	echo "Process: prepare certificate;"
	tput setaf 7;
	if $cloudflare; then
		certbot certonly -t -n --agree-tos --dns-cloudflare --dns-cloudflare-credentials /etc/cloudflare/cloudflare.ini --dns-cloudflare-propagation-seconds 60 --server https://acme-v02.api.letsencrypt.org/directory $([ ${#hostarr[*]} -eq 2 ] && echo " -d $host -d *.$host" || echo " -d $host") -m "$cf_mail";
	else
		certbot certonly -t -n --agree-tos --standalone$([ ${#hostarr[*]} -eq 2 ] && echo " -d $host -d *.$host" || echo " -d $host") -m "$cf_mail";
	fi

	tput setaf 3;
	echo "Process: prepare nginx;"
	tput setaf 7;
	echo "deb http://nginx.org/packages/ubuntu $(lsb_release -cs) nginx" | tee /etc/apt/sources.list.d/nginx.list;
	curl -o /tmp/nginx_signing.key https://nginx.org/keys/nginx_signing.key;
	tput setaf 2;
	echo "Check: nginx gpg key;";
	tput setaf 7;
	if gpg --dry-run --quiet --import --import-options show-only /tmp/nginx_signing.key | grep -q 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62; then
		echo "	OK.";
	else
		tput setaf 1;
		echo "	NG.";
		exit 1;
	fi
	mv /tmp/nginx_signing.key /etc/apt/trusted.gpg.d/nginx_signing.asc;
fi

if [ $method == "systemd" ]; then
	tput setaf 3;
	echo "Process: prepare node.js;"
	tput setaf 7;
	curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -;
else
	tput setaf 3;
	echo "Process: prepare docker;"
	tput setaf 7;
	if ! [ -e /usr/share/keyrings/docker-archive-keyring.gpg ]; then
		curl -sL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
	fi
	echo "deb [arch=$arch signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
fi

if $redis_local; then
	tput setaf 3;
	echo "Process: prepare redis;"
	tput setaf 7;
	add-apt-repository ppa:chris-lea/redis-server -y;
fi

tput setaf 3;
echo "Process: apt install #2;"
tput setaf 7;
apt update -y;
apt install -y$([ $method == "systemd" ] && echo " nodejs" || echo " docker-ce docker-ce-cli containerd.io")$($redis_local && echo " redis-server")$($nginx_local && echo " nginx");

echo "Display: Versions;"
if [ $method == "systemd" ]; then
	echo "node";
	node -v;
else
	echo "docker";
	docker --version;
fi
if $redis_local; then
	echo "redis";
	redis-server --version;
fi
if $nginx_local; then
	echo "nginx";
	nginx -v;
fi

if $redis_local; then
	tput setaf 3;
	echo "Process: daemon activate: redis;"
	tput setaf 7;
	systemctl start redis-server;
	systemctl enable redis-server;
fi
if $nginx_local; then
tput setaf 3;
echo "Process: create nginx config;"
tput setaf 7;

cat > "/etc/nginx/conf.d/$host.conf" << NGEOF
# nginx configuration for Misskey
# Created by joinmisskey/bash-install v$version

# For WebSocket
map \$http_upgrade \$connection_upgrade {
    default upgrade;
    ''      close;
}

proxy_cache_path /tmp/nginx_cache levels=1:2 keys_zone=cache1:16m max_size=1g inactive=720m use_temp_path=off;

server {
    listen 80;
    listen [::]:80;
    server_name $host;

    # For SSL domain validation
    root /var/www/html;
    location /.well-known/acme-challenge/ { allow all; }
    location /.well-known/pki-validation/ { allow all; }
    location / { return 301 https://\$server_name\$request_uri; }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name $host;
    ssl_session_cache shared:ssl_session_cache:10m;

    # To use Let's Encrypt certificate
    ssl_certificate     /etc/letsencrypt/live/$host/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$host/privkey.pem;

    # SSL protocol settings
    ssl_protocols TLSv1.2;
    ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA:AES128-SHA;
    ssl_prefer_server_ciphers on;

    # Change to your upload limit
    client_max_body_size 80m;

    # Proxy to Node
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host \$host;
        proxy_http_version 1.1;
        proxy_redirect off;

$($cloudflare || echo "        # If it's behind another reverse proxy or CDN, remove the following.")
$($cloudflare || echo "        proxy_set_header X-Real-IP \$remote_addr;")
$($cloudflare || echo "        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;")
$($cloudflare || echo "        proxy_set_header X-Forwarded-Proto https;")

        # For WebSocket
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection \$connection_upgrade;

        # Cache settings
        proxy_cache cache1;
        proxy_cache_lock on;
        proxy_cache_use_stale updating;
        add_header X-Cache \$upstream_cache_status;
    }
}
NGEOF

nginx -t;

tput setaf 3;
echo "Process: daemon activate: nginx;"
tput setaf 7;

systemctl restart nginx;
systemctl enable nginx;

tput setaf 2;
echo "Check: localhost returns nginx;";
tput setaf 7;
if curl http://localhost | grep -q nginx; then
	echo "	OK.";
else
	tput setaf 1;
	echo "	NG.";
	exit 1;
fi

fi

if $db_local; then
	tput setaf 3;
	echo "Process: install postgres;"
	tput setaf 7;
	wget https://salsa.debian.org/postgresql/postgresql-common/raw/master/pgdg/apt.postgresql.org.sh;
	sh apt.postgresql.org.sh -i -v 13;

	tput setaf 3;
	echo "Process: create user and database on postgres;"
	tput setaf 7;
	sudo -u postgres psql -c "CREATE ROLE $db_user LOGIN CREATEDB PASSWORD '$db_pass';" -c "CREATE DATABASE $db_name OWNER $db_user;"
fi

#region docker setting
if [ $method != "systemd" ]; then
	#region enable rootless docker
	tput setaf 3;
	echo "Process: use rootless docker;"
	tput setaf 7;

	systemctl disable --now docker.service docker.socket
	loginctl enable-linger "$misskey_user"
	sleep 5
	su "$misskey_user" <<-MKEOF
	set -eu;
	cd ~;
	export XDG_RUNTIME_DIR=/run/user/$m_uid;
	export DOCKER_HOST=unix:///run/user/$m_uid/docker.sock;
	systemctl --user --no-pager

	dockerd-rootless-setuptool.sh install

	tput setaf 2;
	echo "Check: docker setup;";
	tput setaf 7;
	docker ps;
	MKEOF
	#endregion

	#region modify postgres confs
	if $db_local; then
		tput setaf 3;
		echo "Process: modify postgres confs;"
		tput setaf 7;
		pg_hba=$(sudo -u postgres psql -t -P format=unaligned -c 'show hba_file')
		pg_conf=$(sudo -u postgres psql -t -P format=unaligned -c 'show config_file')
		[[ $(ip addr | grep "$docker_host_ip") =~ /([0-9]+) ]] && subnet=${BASH_REMATCH[1]};

		hba_text="host $db_name $db_user $docker_host_ip/$subnet md5"
		if ! grep "$hba_text" "$pg_hba"; then
			echo "$hba_text" >> "$pg_hba";
		fi

		pgconf_search="#listen_addresses = 'localhost'"
		pgconf_text="listen_addresses = '$docker_host_ip'"
		if grep "$pgconf_search" "$pg_conf"; then
			sed -i'.mkmoded' -e "s/$pgconf_search/$pgconf_text/g" "$pg_conf";
		elif grep "$pgconf_text" "$pg_conf"; then
			echo "	skip"
		else
			echo "Please edit postgresql.conf to set [listen_addresses = '$docker_host_ip'] by your hand."
			read -r -p "Enter the editor command and press Enter key > " -e -i "nano" editorcmd
			$editorcmd "$pg_conf";
		fi

		systemctl restart postgresql;
	fi
	#endregion
fi
#endregion

#region modify redis conf
if $redis_local; then
	tput setaf 3;
	echo "Process: modify redis confs;"
	tput setaf 7;
	if [ -f /etc/redis/redis.conf ]; then
		echo "requirepass $redis_pass" > /etc/redis/misskey.conf
		[ $method != "systemd" ] && echo "bind $docker_host_ip" >> /etc/redis/misskey.conf

		if ! grep "include /etc/redis/misskey.conf" /etc/redis/redis.conf; then
			echo "include /etc/redis/misskey.conf" >> /etc/redis/redis.conf;
		else
			echo "	skip"
		fi
	else
		echo "Couldn't find /etc/redis/redis.conf."
		echo "Please modify redis config in another shell like following."
		echo ""
		echo "requirepass $redis_pass"
		[ $method != "systemd" ] && echo "bind $docker_host_ip"
		echo ""
		read -r -p "Press Enter key to continue> "
	fi
	systemctl restart redis-server;
fi
#endregion

if [ $method == "systemd" ]; then
#region systemd
#region work with misskey user
su "$misskey_user" << MKEOF;
set -eu;
cd ~
cd "$misskey_directory";

tput setaf 3;
echo "Process: install npm packages;"
tput setaf 7;
npx yarn install --production;

tput setaf 3;
echo "Process: build misskey;"
tput setaf 7;
NODE_ENV=production npm run build;

tput setaf 3;
echo "Process: initialize database;"
tput setaf 7;
npm run init;

tput setaf 3;
echo "Check: If Misskey starts correctly;"
tput setaf 7;
if timeout 20 npm start | grep -q "Now listening on port"; then
	echo "	OK.";
else
	tput setaf 1;
	echo "	NG.";
	exit 1;
fi
MKEOF
#endregion

tput setaf 3;
echo "Process: create misskey daemon;"
tput setaf 7;
cat > "/etc/systemd/system/$host.service" << _EOF
[Unit]
Description=Misskey daemon

[Service]
Type=simple
User=$misskey_user
ExecStart=$(command -v npm) start
WorkingDirectory=/home/$misskey_user/$misskey_directory
Environment="NODE_ENV=production"
TimeoutSec=60
StandardOutput=journal
StandardError=journal
SyslogIdentifier="$host"
Restart=always

[Install]
WantedBy=multi-user.target
_EOF

systemctl daemon-reload;
systemctl enable "$host";
systemctl start "$host";
systemctl status "$host";

#endregion
elif [ $method == "docker" ]; then
#region docker build
tput setaf 3;
echo "Process: build docker image;"
tput setaf 7;

sudo -u "$misskey_user" XDG_RUNTIME_DIR=/run/user/$m_uid DOCKER_HOST=unix:///run/user/$m_uid/docker.sock docker build -t $docker_repository "/home/$misskey_user/$misskey_directory";
#endregion
fi

echo "";

if [ $method != "systemd" ]; then
tput setaf 2;
tput bold;
echo "ALL MISSKEY INSTALLATION PROCESSES ARE COMPLETE!";
echo "Now all we need to do is run docker run."
tput setaf 7;
echo "Watch the screen."
echo "When it shows \"Now listening on port $misskey_port on https://$host\","
echo "press Ctrl+C to exit logs and jump to https://$host/ and continue setting up your instance.";
echo ""
echo "This script version is v$version.";
echo "Please follow @joinmisskey@misskey.io to address bugs and updates.";
echo ""
read -r -p "Press Enter key to execute docker run> ";
echo ""
tput setaf 3;
echo "Process: docker run;"
tput setaf 7;
docker_container=$(sudo -u "$misskey_user" XDG_RUNTIME_DIR=/run/user/$m_uid DOCKER_HOST=unix:///run/user/$m_uid/docker.sock docker run -d -p $misskey_port:$misskey_port --add-host=$misskey_localhost:$docker_host_ip -v "/home/$misskey_user/$misskey_directory/files":/misskey/files -v "/home/$misskey_user/$misskey_directory/.config/default.yml":/misskey/.config/default.yml:ro --restart unless-stopped -t "$docker_repository");
echo "$docker_container";
su "$misskey_user" << MKEOF
set -eu;
cd ~;

tput setaf 3;
echo "Process: create .misskey-docker.env;"
tput setaf 7;

cat > ".misskey-docker.env" << _EOF
method="$method"
host="$host"
misskey_port=$misskey_port
misskey_directory="$misskey_directory"
misskey_localhost="$misskey_localhost"
docker_host_ip=$docker_host_ip
docker_repository="$docker_repository"
docker_container="$docker_container"
version="$version"
_EOF
MKEOF

sudo -u "$misskey_user" XDG_RUNTIME_DIR=/run/user/$m_uid DOCKER_HOST=unix:///run/user/$m_uid/docker.sock docker logs -f $docker_container;

else

su "$misskey_user" << MKEOF
set -eu;
cd ~;

tput setaf 3;
echo "Process: create .misskey.env;"
tput setaf 7;

cat > ".misskey.env" << _EOF
host="$host"
misskey_port=$misskey_port
misskey_directory="$misskey_directory"
misskey_localhost="$misskey_localhost"
version="$version"
_EOF
MKEOF

tput setaf 2;
tput bold;
echo "ALL MISSKEY INSTALLATION PROCESSES ARE COMPLETE!";
echo "Jump to https://$host/ and continue setting up your instance.";
tput setaf 7;
echo "This script version is v$version.";
echo "Please follow @joinmisskey@misskey.io to address bugs and updates.";
fi
