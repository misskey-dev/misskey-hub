Create Misskey instance with Docker
================================================================

This guide describes how to install and setup Misskey with Docker.

::: tip Requirement
- docker and docker-compose installed
:::

Get the repository
----------------------------------------------------------------
```bash
git clone -b master git://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
```

Configure
----------------------------------------------------------------
Copy example configuration files with following:

```bash
cp .config/example.yml .config/default.yml
cp .config/docker_example.env .config/docker.env
```

Edit `default.yml` and `docker.env` according to the instructions in the files.

::: warning
In the `default.yml`, the hosts for Postgresql/Redis should be set to `db`/`redis` respectively.
:::

Edit `docker-compose.yml` if necessary. (e.g. if you want to change the port).

Build and initialize
----------------------------------------------------------------
The following command will build Misskey and initialize the database.
This will take some time.

``` shell
sudo docker-compose build
sudo docker-compose run --rm web yarn run init
```

Launch
----------------------------------------------------------------
Well done! You can start Misskey with the following command.


```bash
sudo docker-compose up -d
```

GLHF!

How to update your Misskey server to the latest version
----------------------------------------------------------------

1. `git stash`
1. `git checkout master`
1. `git pull`
1. `git submodule update --init`
1. `git stash pop`
1. `sudo docker-compose build`
1. `sudo docker-compose stop && sudo docker-compose up -d`

How to execute CLI command
----------------------------------------------------------------

`sudo docker-compose run --rm web node built/tools/mark-admin @example`
