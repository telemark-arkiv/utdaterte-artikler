[![Build Status](https://travis-ci.org/telemark/utdaterte-artikler.svg?branch=master)](https://travis-ci.org/telemark/utdaterte-artikler)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/utdaterte-artikler.svg)](https://greenkeeper.io/)

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

## License

[MIT](LICENSE)

![Robohash image of utdaterte-artikler](https://robots.kebabstudios.party/portalen-web.png "Robohash image of utdaterte-artikler")