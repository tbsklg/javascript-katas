function filterList2 (l) {
  return l.filter(element => typeof element !== 'string')
}

module.exports = filterList2
