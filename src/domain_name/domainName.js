function domainName (url) {
  return url.match(/^(?:http?:\/\/)?(?:https?:\/\/)?(?:www\.)?([a-zA-Z\-\d]+)/)[1]
}

module.exports = domainName
