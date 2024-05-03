function count(string) {
  return string
    .split('')
    .reduce((acc, curr) => ({ ...acc, [curr]: (acc[curr] | 0) + 1 }), {})
}

module.exports = count
