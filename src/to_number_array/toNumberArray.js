function toNumberArray(stringarray) {
  return stringarray.map((s) => +s)
  // return stringarray.map(Number)
}

module.exports = toNumberArray
