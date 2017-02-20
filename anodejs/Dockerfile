FROM alpine:edge

MAINTAINER daewood <daewood@qq.com>

RUN echo http://dl-4.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories \
    && apk --update add nodejs git imagemagick \
    && rm -rf /var/cache/apk/*
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org \
	&& cnpm install -g pm2 --loglevel warn
	
COPY rootfs/ /	
VOLUME [ "/app"]
WORKDIR /app
EXPOSE 3000

CMD [ "npm", "start" ]

