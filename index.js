'use strict'

var smta = require('sitemap-to-array')
var filterArticles = require('./lib/filter-articles')
var sitemapUrl = 'http://www.telemark.no/sitemap.xml'

var options = {
  limit: 360,
  skipFolders: ['/Aktuelt']
}

var smtaOptions = {
  returnOnComplete: true
}

smta(sitemapUrl, smtaOptions, function (error, list) {
  if (error) {
    console.error(error)
  } else {
    options.list = list
    filterArticles(options, function (err, data) {
      if (err) {
        console.error(err)
      } else {
        console.log(data)
      }
    })
  }
})
