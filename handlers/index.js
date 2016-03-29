'use strict'

var config = require('../config')
var getSitemapData = require('../lib/get-sitemap-data')
var getFilteredArticles = require('../lib/get-filtered-articles')

function getFrontpage (request, reply) {
  var sitemapData = request.yar.get('sitemapData')
  var options = {
    limit: 360,
    skipFolders: ['/Aktuelt'],
    sitemapUrl: config.SITEMAP_URL,
    showOnly: ''
  }

  if (!sitemapData) {
    getSitemapData(options, function (error, sitemapData) {
      if (error) {
        reply(error)
      } else {
        request.yar.set({'sitemapData': sitemapData})
        options.sitemapData = sitemapData
        options.articles = getFilteredArticles(options)
        reply.view('index', options)
      }
    })
  } else {
    options.sitemapData = sitemapData
    options.articles = getFilteredArticles(options)
    reply.view('index', options)
  }
}

function filterFrontpage (request, reply) {
  var sitemapData = request.yar.get('sitemapData')
  var payload = request.payload
  var filterBy = payload.filterBy || false
  var skipFolders = filterBy ? filterBy.split(',') : filterBy
  var options = {
    limit: parseInt(payload.limitDays, 10),
    skipFolders: skipFolders,
    sitemapUrl: config.SITEMAP_URL,
    showOnly: payload.showOnly
  }

  if (!sitemapData) {
    getSitemapData(options, function (error, sitemapData) {
      if (error) {
        reply(error)
      } else {
        request.yar.set({'sitemapData': sitemapData})
        options.sitemapData = sitemapData
        options.articles = getFilteredArticles(options)
        reply.view('index', options)
      }
    })
  } else {
    options.sitemapData = sitemapData
    options.articles = getFilteredArticles(options)
    reply.view('index', options)
  }
}

module.exports.getFrontpage = getFrontpage

module.exports.filterFrontpage = filterFrontpage
