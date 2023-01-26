#
# usage:
#       export NAME=cx-portal-swagger
#       export IMAGE=ghcr.io/catenax-ng/$NAME
#       docker build -t $IMAGE -f .conf/Dockerfile .
#       docker run --rm -d -p 8080:8080 --name $NAME $IMAGE
#       docker exec $NAME find /usr/share/nginx/html/
#       docker stop $NAME
#       docker push $IMAGE
#

FROM nginxinc/nginx-unprivileged:alpine
COPY .conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY /public/swagger/* /usr/share/nginx/html/
USER 101
