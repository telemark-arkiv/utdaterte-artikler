'use strict'

var config = {
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  BASE_URL: process.env.BASE_URL || 'http://www.telemark.no',
  SITEMAP_URL: process.env.SITEMAP_URL || 'http://www.telemark.no/sitemap.xml'
}

module.exports = config
