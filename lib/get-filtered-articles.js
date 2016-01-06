'use strict'

function getFilteredArticles (options, callback) {
  var smta = require('sitemap-to-array')
  var filterArticles = require('./filter-articles')
  var filterByPath = require('./filter-by-path')

  smta(options.sitemapUrl, function (error, list) {
    if (error) {
      return callback(error, null)
    } else {
      options.list = filterByPath(list, options.showOnly)
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
