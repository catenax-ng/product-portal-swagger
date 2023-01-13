# Catena-X Portal Swagger

Swagger UI to document and test the Catena-X Portal backend and other APIs.

local build

    export NAME=cx-portal-swagger
    export IMAGE=ghcr.io/catenax-ng/$NAME
    docker build -t $IMAGE -f .conf/Dockerfile .
    docker run --rm -d -p 8080:8080 --name $NAME $IMAGE
    docker exec $NAME find /usr/share/nginx/html/
    docker stop $NAME
    docker tag $IMAGE $IMAGE:main
    docker push $IMAGE
