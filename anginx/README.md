# nginx based on alpine:edge linux
$ docker run --name angix -p 80:80 -p 443:443 daewood/anginx
$ docker cp anginx:/etc/nginx/nginx.conf <nginx_conf_file>

#Default Conf Run

$ docker run -d --name nginx -v <docker_volume_name>:/var/www daewood/anginx

#Advanced Conf Run

$ docker run -d --name redis -v <docker_volume_name>:/var/www -v <nginx_conf_file>:/etc/nginx.conf daewood/anginx
