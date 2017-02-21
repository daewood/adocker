FROM daewood/abase:latest
MAINTAINER daewood <daewood@qq.com>

RUN apk add --update mariadb mariadb-common mariadb-client && \
    rm -rf /var/cache/apk/*

COPY rootfs/ /

ENTRYPOINT ["/init"]
CMD []

EXPOSE 3306
VOLUME ["/mysql"]
