FROM alpine:edge

MAINTAINER daewood <daewood@qq.com>

RUN echo "@testing http://dl-4.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories \
    && apk add --update redis \
    && rm -rf /var/cache/apk/* 

WORKDIR /data
EXPOSE 6379
COPY redis.conf /etc/redis.conf
CMD [ "redis-server", "/etc/redis.conf" ]

