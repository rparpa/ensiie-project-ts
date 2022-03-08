# ENSIIE Web Project Skeleton

## Install your application
This tutorial will guide you through the installation procedure of the Web Project Skeleton.

The only packages you need to install right now are **docker** and **docker-compose**
1. [Install Docker](https://docs.docker.com/install/)
2. [Docker w/o sudo](https://docs.docker.com/install/linux/linux-postinstall/)
3. [Install Docker Compose](https://docs.docker.com/compose/install/)

Then, clone the Web Project skeleton on your machine:
* `git clone https://github.com/rparpa/ensiie-project-ts.git`
* `cd ensiie-project`

The next step is to set some environment variables in the `.env` file
* Open this Skeleton on your favorite IDE : Webstorm or VSCode.
* Create an .env file `cp env.dist .env` & edit it with your own values:
  * DOCKER_USER_ID: to obtain the value of this variable you need to execute this command `$(echo id -u $USER)` on a Terminal. Copy and past the output.
  * DOCKER_USER: your current user which you can get with `whoami`.

Now, let's begin the installation :
* `make install`. This command may take time.
* That's it! Your website is running [http:localhost:8080](http:localhost:8080)

Below are some useful commands :
* `make stop` Stop the containers
* `make start` Start the containers
* `make db.connect` Connect to th database
* `make jest.run` Run jest tests
* `make install` Reinstall all containers
