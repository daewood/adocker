# anodejs
nodejs Alpine Dockerfile

#Usage

-To run mongod:
```
$ docker run -d --name anode -p 3000:3000 daewood/anodejs
You can also specify the database repository where to store the data with the volume -v option:
```
$ docker run -d --name anode -p 3000:3000 \
  -v /somewhere/app:/app \
  daewood/anodejs
To run a shell session:
```
$ docker exec -ti anode sh
To use the anodejs shell client:
```
$ docker exec -ti anode cnpm
$ docker exec -ti anode pm2
$ docker exec -ti anode git
The anodejs shell client can also be run its own container:
```
$ docker run -ti --rm --name anodeshell andoejs cnpm install
