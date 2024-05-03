function countAdjacentPairs(searchString) {
  if (searchString === '') return 0
  const words = searchString.toLowerCase().split(' ')

  function countByAdjacent(xs) {
    if (xs.length === 1 || xs.length === 0) return 0
    const [x, y, ...rest] = xs

    if (x === y) return 1 + countByAdjacent(dropOccurences(rest, x))
    return countByAdjacent([y, ...rest])
  }

  function dropOccurences(xs, x) {
    if (xs.length === 0) return []
    const [head, ...tail] = xs

    if (head === x) return dropOccurences(tail, x)
    return xs
  }

  return countByAdjacent(words)
}

module.exports = countAdjacentPairs
