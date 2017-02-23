FROM daewood/asshd

MAINTAINER daewood <daewood@qq.com>

RUN apk --update add nodejs git imagemagick \
	npm install -g cnpm --registry=https://registry.npm.taobao.org && \
	cnpm install -g pm2 --loglevel warn && \
    && rm -rf /var/cache/apk/* /src

COPY rootfs/ /
	
VOLUME [ "/app"]
WORKDIR /app
EXPOSE 3000
ENTRYPOINT ["/init"]
CMD [ "pm2", "start", "/app/pm2.json" ]

