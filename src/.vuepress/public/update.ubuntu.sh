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

tput setaf 3;
echo "Process: import environment and detect method;";
tput setaf 7;
if [ -f "/root/.misskey.env" ]; then
	. "/root/.misskey.env";
	if [ -f "/home/$misskey_user/.misskey.env" ]; then
		. "/home/$misskey_user/.misskey.env";
		method=systemd;
	elif [ -f "/home/$misskey_user/.misskey-docker.env" ]; then
		. "/home/$misskey_user/.misskey-docker.env";
	else
		misskey_user=misskey;
		misskey_directory=misskey;
		misskey_localhost=localhost;
		method=systemd;
		echo "use default";
	fi
else
	misskey_user=misskey;
	misskey_directory=misskey;
	misskey_localhost=localhost;
	method=systemd;
	echo "use default";
fi

echo "method: $method / user: $misskey_user / dir: $misskey_directory / $misskey_localhost:$misskey_port";

if [ $method == "systemd" ]; then
#region systemd
tput setaf 3;
echo "Process: update (systemd);";
tput setaf 7;
#region work with misskey user
su "$misskey_user" << MKEOF
set -eu;
cd ~/$misskey_directory;

tput setaf 3;
echo "Process: git pull;";
tput setaf 7;
git pull;
MKEOF
#endregion

tput setaf 3;
echo "Process: stop daemon;";
tput setaf 7;
systemctl stop "$host"

#region work with misskey user
su "$misskey_user" << MKEOF
set -eu;
cd ~/$misskey_directory;

tput setaf 3;
echo "Process: yarn install;";
tput setaf 7;
npx yarn install;

tput setaf 3;
echo "Process: build misskey;";
tput setaf 7;
npm run clean;
NODE_ENV=production npm run build;

tput setaf 3;
echo "Process: migrate db;";
tput setaf 7;
npm run migrate;
MKEOF
#endregion

if [ $# == 1 ] && [ $1 == "-r" ]; then
	tput setaf 3;
	echo "Process: apt upgrade;";
	tput setaf 7;
	apt update -y;
	apt full-upgrade -y;

	tput setaf 3;
	echo "reboot;";
	tput setaf 7;
	reboot;
else
	tput setaf 3;
	echo "Process: start daemon;";
	tput setaf 7;
	systemctl start "$host";
fi
#endregion
else
	m_uid=$(id -u "$misskey_user");
	oldid=$(sudo -u "$misskey_user" XDG_RUNTIME_DIR=/run/user/$m_uid DOCKER_HOST=unix:///run/user/$m_uid/docker.sock docker images --no-trunc --format "{{.ID}}" $docker_repository);

	if [ $method == "docker" ]; then
		tput setaf 3;
		echo "Process: docker build;";
		tput setaf 7;
		if [ $# == 1 ]; then
			docker_repository="$1";
		else
			docker_repository="local/misskey:latest";
		fi

		sudo -u "$misskey_user" XDG_RUNTIME_DIR=/run/user/$m_uid DOCKER_HOST=unix:///run/user/$m_uid/docker.sock docker build -t $docker_repository "/home/$misskey_user/$misskey_directory";

	else
		tput setaf 3;
		echo "Process: docker pull;";
		tput setaf 7;
		if [ $# == 1 ]; then
			docker_repository="$1";
		else
			docker_repository="misskey/misskey:latest";
		fi

		sudo -u "$misskey_user" XDG_RUNTIME_DIR=/run/user/$m_uid DOCKER_HOST=unix:///run/user/$m_uid/docker.sock docker pull "$docker_repository";
	fi

	tput setaf 3;
	echo "Process: docker rm container;";
	tput setaf 7;
	sudo -u "$misskey_user" XDG_RUNTIME_DIR=/run/user/$m_uid DOCKER_HOST=unix:///run/user/$m_uid/docker.sock docker rm -f "$docker_container";

	tput setaf 3;
	echo "Process: docker run;";
	tput setaf 7;
	docker_container=$(sudo -u "$misskey_user" XDG_RUNTIME_DIR=/run/user/$m_uid DOCKER_HOST=unix:///run/user/$m_uid/docker.sock docker run -d -p $misskey_port:$misskey_port --add-host=$misskey_localhost:$docker_host_ip -v /home/$misskey_user/$misskey_directory/files:/misskey/files -v "/home/$misskey_user/$misskey_directory/.config/default.yml":/misskey/.config/default.yml:ro --restart unless-stopped -t "$docker_repository");

	su "$misskey_user" <<-MKEOF
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

	tput setaf 3;
	echo "Process: docker remove image;";
	tput setaf 7;
	sudo -u $misskey_user XDG_RUNTIME_DIR=/run/user/$m_uid DOCKER_HOST=unix:///run/user/$m_uid/docker.sock docker rmi "$oldid"
fi
