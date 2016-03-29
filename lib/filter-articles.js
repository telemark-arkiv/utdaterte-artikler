'use strict'

function daysBetween (date1, date2) {
  return Math.floor((date1 - date2) / (1000 * 60 * 60 * 24))
}

function isOutOfDate (dateString, limit) {
  var today = new Date()
  var articleDate = new Date(dateString)
  var age = daysBetween(today, articleDate)
  return age > limit
}

function isInSkipFolder (skips, url) {
  if (skips) {
    var statusList = []
    skips.forEach(function (str) {
      statusList.push(url.indexOf(str) > -1)
    })
    return statusList.indexOf(true) > -1
  } else {
    return false
  }
}

function filterArticles (options) {
  var filteredList = []
  options.list.forEach(function (item) {
    if (!isInSkipFolder(options.skipFolders, item.loc) && isOutOfDate(item.lastmod, options.limit)) {
      filteredList.push(item)
    }
  })
  return filteredList
}

module.exports = filterArticles
