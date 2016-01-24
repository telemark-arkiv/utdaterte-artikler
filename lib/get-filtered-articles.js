'use strict'

function getFilteredArticles (options) {
  var filterArticles = require('./filter-articles')
  var filterByPath = require('./filter-by-path')

  options.list = filterByPath(options.sitemapData, options.showOnly)

  return filterArticles(options)
}

module.exports = getFilteredArticles
