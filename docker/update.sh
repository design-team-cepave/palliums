#!/bin/bash
set -e
DIR_PATH=$(dirname $(readlink -f $0))

cd $DIR_PATH
git pull origin dev

docker-compose build -d
docker rm -f palliums01
docker-compose down
docker-compose up -d

docker ps -a
