function uniteUnique (...arr) {
  return [...new Set(arr.flat())]
}

module.exports = uniteUnique
