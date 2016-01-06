'use strict'

var config = require('../config')
var getFilteredArticles = require('../lib/get-filtered-articles')

function getFrontpage (request, reply) {
  var viewOptions = {}

  var options = {
    limit: 360,
    skipFolders: ['/Aktuelt'],
    sitemapUrl: 'http://www.telemark.no/sitemap.xml',
    showOnly: ''
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
  var payload = request.payload
  var options = {
    limit: parseInt(payload.limitDays, 10),
    skipFolders: payload.filterBy.split(','),
    sitemapUrl: 'http://www.telemark.no/sitemap.xml',
    showOnly: payload.showOnly
  }

  console.log(payload)
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
