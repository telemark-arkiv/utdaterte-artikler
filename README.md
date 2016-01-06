# utdaterte-artikler
Viser utdaterte artikler på nettsiden vår

## Docker

Build the image

```sh
$ docker build -t utdaterte-artikler .
```

Run the image

```sh
docker run -d -p 80:3000 --name outdated utdaterte-artikler
```
