'use strict'

const Wreck = require('wreck')
const config = require('../config')
const url = `https://sitemap.t-fk.win?sitemap=${config.SITEMAP_URL}`

module.exports = (options, callback) => {
  Wreck.get(url, {json: true}, (error, response, payload) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, payload)
    }
  })
}
