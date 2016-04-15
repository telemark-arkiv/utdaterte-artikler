'use strict'

function getSitemapData (options, callback) {
  var req = require('http-https')
  var smta = require('sitemap-to-array')
  var concat = require('concat-stream')

  req.get(options.sitemapUrl, function (res) {
    res.pipe(concat(function (body) {
      smta(body.toString(), function (error, data) {
        if (error) {
          console.error(error)
          if (error.message && error.message === 'Missing required input: sitemap.') {
            return callback(null, [])
          } else {
            return callback(error, null)
          }
        } else {
          return callback(null, data)
        }
      })
    }))
  })
}

module.exports = getSitemapData
