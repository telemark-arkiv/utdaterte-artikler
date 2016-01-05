'use strict'

var config = require('../config')
var getFilteredArticles = require('../lib/get-filtered-articles')

function getFrontpage (request, reply) {
  var viewOptions = {}

  var options = {
    limit: 360,
    skipFolders: ['/Aktuelt'],
    sitemapUrl: 'http://www.telemark.no/sitemap.xml'
  }

  getFilteredArticles(options, function (error, data) {
    if (error) {
      reply(error)
    } else {
      viewOptions.articles = data
      reply.view('index', viewOptions)
    }
  })
}

function filterFrontpage (request, reply) {
  var viewOptions = {}
  getFilteredArticles(options, function (error, data) {
    if (error) {
      reply(error)
    } else {
      viewOptions.articles = data
      reply.view('index', viewOptions)
    }
  })
}

module.exports.getFrontpage = getFrontpage

module.exports.filterFrontpage = filterFrontpage
