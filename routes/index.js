'use strict'

var handlers = require('../handlers')

var routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.getFrontpage,
      description: 'Show the frontpage'
    }
  },
  {
    method: 'POST',
    path: '/',
    config: {
      handler: handlers.filterFrontpage,
      description: 'Show the filtered version frontpage'
    }
  }
]

module.exports = routes
