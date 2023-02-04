function findOdd (A) {
  return A
    .map(x => ({ number: x, occurrences: A.filter(y => y === x).length }))
    .filter(({ occurrences }) => occurrences % 2 !== 0)
    .map(({ number }) => number)[0]
}

module.exports = findOdd
