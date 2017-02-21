FROM daewood/abase

MAINTAINER daewood <daewood@qq.com>

RUN apk --update add redis \
    && rm -rf /var/cache/apk/* 

COPY rootfs/ /

ENTRYPOINT ["/init"]
CMD []

EXPOSE 6379
VOLUME ["/data"]

