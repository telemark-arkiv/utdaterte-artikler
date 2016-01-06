'use strict'

var smta = require('sitemap-to-array')
var filterArticles = require('./filter-articles')
var list = require('../sitmap')

function getFilteredArticles (options, callback) {

  var smtaOptions = {
    returnOnComplete: true
  }

  options.list = list
  filterArticles(options, function (error, data) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, data)
    }
  })

  /*
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
   */
}

module.exports = getFilteredArticles
