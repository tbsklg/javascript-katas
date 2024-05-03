function pascal(depth) {
  if (depth === 1) return [[1]]

  const go = (n, acc) => {
    if (n === 0) return acc

    return go(n - 1, [...acc, createLine(acc[acc.length - 1])])
  }

  return go(depth - 1, [[1]])
}

const createLine = (line) => [1, ...zipWith(plus)(line, tailMay(line)), 1]

const plus = (x, y) => x + y

const zipWith = (fn) => (xs, ys) => {
  const go = (l, r) => {
    if (l.length === 0) return []

    if (r.length === 0) return []

    const [x, ...xs] = l
    const [y, ...ys] = r

    return [fn(x, y), ...go(xs, ys)]
  }

  return go(xs, ys)
}

const tailMay = ([, ...xs]) => (xs === undefined ? [] : xs)

module.exports = pascal
