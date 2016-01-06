'use strict'

var config = require('../config')

function filterByPath (list, path) {
  if (path.length === 0) {
    return list
  }  else {
    var newList = []
    var filterPath = config.BASE_URL + '/' + path
    list.forEach(function (item) {
      if (item.loc.indexOf(filterPath) > -1) {
        newList.push(item)
      }
    })
    return newList
  }
}

module.exports = filterByPath
