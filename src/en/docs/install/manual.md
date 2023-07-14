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
* **[Node.js](https://nodejs.org/en/)** (20.4.x)
* **[PostgreSQL](https://www.postgresql.org/)** (15.x)
* **[Redis](https://redis.io/)**
* **[FFmpeg](https://www.ffmpeg.org/)**

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
	alter database misskey owner to misskey;
	\q
	```

2. Run the database initialisation
	`pnpm run init`

*7.* That is it.
----------------------------------------------------------------
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
