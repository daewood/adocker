# asshd
sshd based on Alpine Linux

#Usage

-To run asshd:
```
$ docker run -d --name sshd -p 8022:22 daewood/asshd
You can also specify the database repository where to store the data with the volume -v option:
```
$ docker run -d --name sshd -p 8022:22 \
  -v /somewhere:/data/ \
  daewood/asshd
To run a shell session:
```
$ docker exec -ti sshd sh

