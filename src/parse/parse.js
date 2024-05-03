function parse(raw) {
  const performParsing = ([x, ...xs], currentResult = 0) => {
    const increment = (i) => i + 1
    const decrement = (i) => i - 1
    const square = (i) => Math.pow(i, 2)

    if (x === undefined) return []
    if (x === 'i') return performParsing(xs, increment(currentResult))
    if (x === 'd') return performParsing(xs, decrement(currentResult))
    if (x === 's') return performParsing(xs, square(currentResult))
    if (x === 'o') return [currentResult, ...performParsing(xs, currentResult)]

    return performParsing(xs, currentResult)
  }

  return performParsing(raw.split(''))
}

module.exports = parse
