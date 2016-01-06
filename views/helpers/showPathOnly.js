'use strict'

var config = require('../../config')

module.exports = function (url) {
  return url.replace(config.BASE_URL, '')
}
