FROM alpine:edge

MAINTAINER daewood <daewood@qq.com>

RUN echo http://dl-4.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories \
    && apk add --update mongodb \
    && rm -rf /var/cache/apk/* \
	&& rm /usr/bin/mongosniff /usr/bin/mongoperf

VOLUME /data/db
EXPOSE 27017 28017
CMD [ "mongod" ]

