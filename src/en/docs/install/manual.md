Misskey Setup and Installation Guide
================================================================

We thank you for your interest in setting up your Misskey server!
This guide describes how to install and setup Misskey.

----------------------------------------------------------------

*1.* Create Misskey user
----------------------------------------------------------------
Running misskey as root is not a good idea so we create a user for that.
In debian for exemple :

```sh
adduser --disabled-password --disabled-login misskey
```

*2.* Install dependencies
----------------------------------------------------------------
Please install and setup these softwares:

#### Dependencies :package:
* **[Node.js](https://nodejs.org/en/)** (16.x)
* **[PostgreSQL](https://www.postgresql.org/)** (12.x / 13.x is preferred)
* **[Redis](https://redis.io/)**

##### Optional
* [Yarn](https://yarnpkg.com/) *Optional but recommended for security reason. If you won't install it, use `npx yarn` instead of `yarn`.*
* [FFmpeg](https://www.ffmpeg.org/)

*3.* Install Misskey
----------------------------------------------------------------
1. Connect to the `misskey` user

	`su - misskey`

2. Clone the Misskey repository

	`git clone --recursive https://github.com/misskey-dev/misskey.git`

3. Navigate to the repository

	`cd misskey`

4. Check out the [latest release](https://github.com/misskey-dev/misskey/releases/latest)

	`git checkout master`

5. Install Misskey's dependencies

	`yarn install`

*4.* Configure Misskey
----------------------------------------------------------------
1. Copy the `.config/example.yml` and rename it to `default.yml`.

	`cp .config/example.yml .config/default.yml`

2. Edit `default.yml`

*5.* Build Misskey
----------------------------------------------------------------

Build misskey with the following:

`NODE_ENV=production yarn build`

If you're on Debian, you will need to install the `build-essential`, `python` package.

If you're still encountering errors about some modules, use node-gyp:

1. `npx node-gyp configure`
2. `npx node-gyp build`
3. `NODE_ENV=production yarn build`

*6.* Init DB
----------------------------------------------------------------
1. Create the appropriate PostgreSQL users with respective passwords,
	and empty database as named in the configuration file.
	Make sure the database connection also works correctly when run from the
	user that will later run Misskey, or it could cause problems later.
	`sudo -u postgres psql`
	`create database misskey;`
	`create user misskey with encrypted password '{YOUR_PASSWORD}';`
	`grant all privileges on database misskey to misskey;`
	`\q`

2. Run the database initialisation
	`yarn run init`

*7.* That is it.
----------------------------------------------------------------
Well done! Now, you have an environment that run to Misskey.

### Launch normally
Just `NODE_ENV=production npm start`. GLHF!

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
	StandardOutput=syslog
	StandardError=syslog
	SyslogIdentifier=misskey
	Restart=always

	[Install]
	WantedBy=multi-user.target
	```
	:::

3. Reload systemd and enable the misskey service.

	`systemctl daemon-reload ; systemctl enable misskey`

4. Start the misskey service.

	`systemctl start misskey`

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
4. `yarn install`
5. `NODE_ENV=production yarn build`
6. `yarn migrate`
7. Restart your Misskey process to apply changes
8. Enjoy

If you encounter any problems with updating, please try the following:
1. `yarn clean` or `yarn cleanall`
2. Retry update (Don't forget `yarn install`

----------------------------------------------------------------

If you have any questions or troubles, feel free to contact us!
