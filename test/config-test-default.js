'use strict'

var tap = require('tap')
var config = require('../config')

tap.equal(config.SERVER_PORT, 3000, 'Default SERVER_PORT ok')
tap.equal(config.BASE_URL, 'http://www.telemark.no', 'Default BASE_URL ok')
tap.equal(config.SITEMAP_URL, 'http://www.telemark.no/sitemap.xml', 'Default SITEMAP_URL ok')
