FROM alpine:edge

MAINTAINER daewood <daewood@qq.com>

ENV S6OVERLAY_VERSION=v1.19.1.1 \
    S6_BEHAVIOUR_IF_STAGE2_FAILS=1 \
    LANG=en_US.UTF-8 \
    LC_ALL=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    TERM=xterm
	
RUN apk update \
    && apk upgrade \
    && apk add git openssh curl \
	&& curl -sSL https://github.com/just-containers/s6-overlay/releases/download/${S6OVERLAY_VERSION}/s6-overlay-amd64.tar.gz | tar xz -C / \
	&& sed -i s/#PermitRootLogin.*/PermitRootLogin\ yes/ /etc/ssh/sshd_config \
	&& echo "root:docker" | chpasswd \
	&& ssh-keygen -A \
    && rm -rf /var/cache/apk/*

COPY rootfs/ /

EXPOSE 22 3000
ENTRYPOINT ["/init"]


