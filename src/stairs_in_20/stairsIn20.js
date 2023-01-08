function stairsIn20 (s) {
  return s
    .map(weekday =>
      weekday.reduce((acc, curr) => acc + curr), 0)
    .reduce((acc, curr) => acc + curr, 0) * 20
}

module.exports = stairsIn20
