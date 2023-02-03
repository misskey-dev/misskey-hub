Misskey Setup and Installation Guide
================================================================

We thank you for your interest in setting up your Misskey server!
This guide describes how to install and setup Misskey.

----------------------------------------------------------------

::: danger
Never change the domain name (hostname) of an instance once you start using it!
:::

*1.* Install dependencies
----------------------------------------------------------------
Please install and setup these softwares:

#### Dependencies :package:
* **[Node.js](https://nodejs.org/en/)** (18.13.x)
* **[PostgreSQL](https://www.postgresql.org/)** (15.x)
* **[Redis](https://redis.io/)**
* **[FFmpeg](https://www.ffmpeg.org/)**
* **[Nginx](https://nginx.org/en/docs/)**

If you are using Debian/Ubuntu, you should install the `build-essential` package.

corepack must be enabled.
```sh
sudo corepack enable
```

*2.* Create Misskey user
----------------------------------------------------------------
Running misskey as root is not a good idea so we create a user for that.
In debian for exemple :

```sh
adduser --disabled-password --disabled-login misskey
```

*3.* Install Misskey
----------------------------------------------------------------
1. Connect to the `misskey` user

	`sudo -iu misskey`

2. Clone the Misskey repository

	`git clone --recursive https://github.com/misskey-dev/misskey.git`

3. Navigate to the repository

	`cd misskey`

4. Check out the [latest release](https://github.com/misskey-dev/misskey/releases/latest)

	`git checkout master`

5. Download submodules

    `git submodule update --init`

5. Install Misskey's dependencies

	`pnpm install --frozen-lockfile`

*4.* Configure Misskey
----------------------------------------------------------------
1. Copy the `.config/example.yml` and rename it to `default.yml`.

	`cp .config/example.yml .config/default.yml`

2. Edit `default.yml`

*5.* Build Misskey
----------------------------------------------------------------

Build misskey with the following:

`NODE_ENV=production pnpm run build`

If you're on Debian, you will need to install the `build-essential`, `python` package.

*6.* Init DB
----------------------------------------------------------------
1. Create the appropriate PostgreSQL users with respective passwords,
	and empty database as named in the configuration file.
	Make sure the database connection also works correctly when run from the
	user that will later run Misskey, or it could cause problems later.
	The encoding of the database should be UTF-8.

	```
	sudo -u postgres psql
	create database misskey with encoding = 'UTF8';
	create user misskey with encrypted password '{YOUR_PASSWORD}';
	grant all privileges on database misskey to misskey;
	\q
	```

2. Run the database initialisation
	`pnpm run init`

*7.* Confiure Nginx.
----------------------------------------------------------------
1. Create a config in your nginx directory 
```
nano /etc/nginx/sites-available/misskey
```

2. Copy and paste this example and change where example.com is with your domain
```
# For WebSocket
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

proxy_cache_path /tmp/nginx_cache levels=1:2 keys_zone=cache1:16m max_size=1g inactive=720m use_temp_path=off;

server {
    listen 80;
    listen [::]:80;
    server_name example.com;

    # For SSL domain validation
    root /var/www/html;
    location /.well-known/acme-challenge/ { allow all; }
    location /.well-known/pki-validation/ { allow all; }
    location / { return 301 https://$server_name$request_uri; }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;

    ssl_session_timeout 1d;
    ssl_session_cache shared:ssl_session_cache:10m;
    ssl_session_tickets off;

    # To use Let's Encrypt certificate
    ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # To use Debian/Ubuntu's self-signed certificate (For testing or before issuing a certificate)
    #ssl_certificate     /etc/ssl/certs/ssl-cert-snakeoil.pem;
    #ssl_certificate_key /etc/ssl/private/ssl-cert-snakeoil.key;

    # SSL protocol settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_stapling on;
    ssl_stapling_verify on;

    # Change to your upload limit
    client_max_body_size 80m;

    # Proxy to Node
    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_redirect off;
				add_header 'Access-Control-Allow-Origin' '*' always;
				
        # If it's behind another reverse proxy or CDN, remove the following.
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;

        # For WebSocket
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;

        # Cache settings
        proxy_cache cache1;
        proxy_cache_lock on;
        proxy_cache_use_stale updating;
        proxy_force_ranges on;
        add_header X-Cache $upstream_cache_status;
    }
}
```

3.
Move this new config into sites-enabled
```
sudo ln -s /etc/nginx/sites-available/misskey /etc/nginx/sites-enabled/misskey
```

4.
Reload nginx
`
sudo service nginx reload
`

*8.* Finishing touches.
----------------------------------------------------------------

if you are using any other os other than ubuntu/debian see your distro's websites wiki to find out how to restart a service

Well done! Now, you have an environment that run to Misskey.

### Launch normally
Just `NODE_ENV=production pnpm run start`. GLHF!

### Launch with systemd

1. Create a systemd service here

	`/etc/systemd/system/misskey.service`

2. Edit it, and paste this and save:

	::: details
	```
	[Unit]
	Description=Misskey daemon

	[Service]
	Type=simple
	User=misskey
	ExecStart=/usr/bin/npm start
	WorkingDirectory=/home/misskey/misskey
	Environment="NODE_ENV=production"
	TimeoutSec=60
	StandardOutput=journal
	StandardError=journal
	SyslogIdentifier=misskey
	Restart=always

	[Install]
	WantedBy=multi-user.target
	```
	:::

3. Reload systemd and enable the misskey service.

	`sudo systemctl daemon-reload; sudo systemctl enable misskey`

4. Start the misskey service.

	`sudo systemctl start misskey`

You can check if the service is running with `systemctl status misskey`.

### Launch with OpenRC

1. Copy the following text to `/etc/init.d/misskey`:

	::: details
	```sh
	#!/sbin/openrc-run

	name=misskey
	description="Misskey daemon"

	command="/usr/bin/npm"
	command_args="start"
	command_user="misskey"

	supervisor="supervise-daemon"
	supervise_daemon_args=" -d /home/misskey/misskey -e NODE_ENV=\"production\""

	pidfile="/run/${RC_SVCNAME}.pid"

	depend() {
		need net
		use logger

		# alternatively, uncomment if using nginx reverse proxy
		#use logger nginx
	}
	```
	:::

2. Set the service to start on boot

	`rc-update add misskey`

3. Start the Misskey service

	`rc-service misskey start`

You can check if the service is running with `rc-service misskey status`.

### How to update your Misskey server to the latest version
1. `git checkout master`
2. `git pull`
3. `git submodule update --init`
4. `NODE_ENV=production pnpm install --frozen-lockfile`
5. `NODE_ENV=production pnpm run build`
6. `pnpm run migrate`
7. Restart your Misskey process to apply changes
8. Enjoy

If you encounter any problems with updating, please try the following:
1. `pnpm run clean` or `pnpm run clean-all`
2. Retry update (Don't forget `pnpm install`
