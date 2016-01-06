'use strict'

var config = require('../config')
var getFilteredArticles = require('../lib/get-filtered-articles')

function getFrontpage (request, reply) {
  var options = {
    limit: 360,
    skipFolders: ['/Aktuelt'],
    sitemapUrl: config.SITEMAP_URL,
    showOnly: ''
  }

  getFilteredArticles(options, function (error, data) {
    if (error) {
      reply(error)
    } else {
      options.articles = data
      reply.view('index', options)
    }
  })
}

function filterFrontpage (request, reply) {
  var payload = request.payload
  var options = {
    limit: parseInt(payload.limitDays, 10),
    skipFolders: payload.filterBy.split(','),
    sitemapUrl: config.SITEMAP_URL,
    showOnly: payload.showOnly
  }

  getFilteredArticles(options, function (error, data) {
    if (error) {
      reply(error)
    } else {
      options.articles = data
      reply.view('index', options)
    }
  })
}

module.exports.getFrontpage = getFrontpage

module.exports.filterFrontpage = filterFrontpage
