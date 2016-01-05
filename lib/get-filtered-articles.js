'use strict'

var smta = require('sitemap-to-array')
var filterArticles = require('./filter-articles')

function getFilteredArticles (options, callback) {

  var smtaOptions = {
    returnOnComplete: true
  }

  smta(options.sitemapUrl, smtaOptions, function (error, list) {
    if (error) {
      return callback(error, null)
    } else {
      options.list = list
      filterArticles(options, function (err, data) {
        if (err) {
          return callback(err, null)
        } else {
          return callback(null, data)
        }
      })
    }
  })
}

module.exports = getFilteredArticles
