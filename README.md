# Catena-X Portal Swagger

Swagger UI to document and test the Catena-X Portal backend and other APIs.


### Some ways to run the Swagger UI

Here are three different ways to run the application on http://localhost:3000/swagger/

local run

    yarn
    yarn start


run image from public registry

    export NAME=cx-portal-swagger
    export IMAGE=ghcr.io/catenax-ng/product-portal-swagger
    docker pull $IMAGE
    docker run --rm -d -p 3000:8080 --name $NAME $IMAGE
    open http://localhost:3000/swagger/


local build and run and publish

    export NAME=cx-portal-swagger
    export IMAGE=ghcr.io/catenax-ng/product-portal-swagger
    docker build -t $IMAGE -f .conf/Dockerfile .
    docker run --rm -d -p 3000:8080 --name $NAME $IMAGE
    open http://localhost:3000/swagger/
    docker stop $NAME
    docker tag $IMAGE $IMAGE:latest
    docker push $IMAGE
