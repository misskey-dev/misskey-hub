Create Misskey instance with Docker Compose
================================================================

This guide describes how to install and setup Misskey with Docker Compose.

::: danger
Never change the domain name (hostname) of an instance once you start using it!
:::

::: tip Requirement
- docker and dockercompose installed
:::

Get the repository
----------------------------------------------------------------
```sh
git clone -b master https://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
```

Configure
----------------------------------------------------------------
Copy example configuration files with following:

```sh
cp .config/docker_example.yml .config/default.yml
cp .config/docker_example.env .config/docker.env
cp ./docker-compose.yml.example ./docker-compose.yml
```

Edit `default.yml` and `docker.env` according to the instructions in the files.

Edit `docker-compose.yml` if necessary. (e.g. if you want to change the port).

Build and initialize
----------------------------------------------------------------
The following command will build Misskey and initialize the database.
This will take some time.

``` shell
sudo docker compose build
sudo docker compose run --rm web pnpm run init
```

Launch
----------------------------------------------------------------
Well done! You can start Misskey with the following command.


```sh
sudo docker compose up -d
```

GLHF✨

How to update your Misskey server
----------------------------------------------------------------
::: warning
When updating, be sure to check the [release notes](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md) to know in advance the changes and whether or not additional work is required (in most cases, it is not).
:::

```sh
git stash
git checkout master
git pull
git submodule update --init
git stash pop
sudo docker compose build
sudo docker compose stop && sudo docker compose up -d
```

It may take some time depending on the contents of the update and the size of the database.

How to execute CLI command
----------------------------------------------------------------
```sh
sudo docker compose run --rm web node packages/backend/built/tools/foo bar
```
