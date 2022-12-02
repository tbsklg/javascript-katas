function filterList (l) {
  return l.filter(v => Number.isInteger(v))
}

module.exports = filterList
