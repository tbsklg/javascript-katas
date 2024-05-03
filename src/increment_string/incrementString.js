function incrementString(strng) {
  return strng.replace(/[0-8]?9*$/, (n) => (n ? parseInt(n) + 1 : 1))
  // return strng.replace(/[0-8]?9*$/, n => n ? + n + 1 : 1)
}

module.exports = incrementString
