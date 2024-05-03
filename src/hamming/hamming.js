function hamming(a, b) {
  return zip(a, b).filter(uncurry((x, y) => x !== y)).length
}

const zip = (xs, ys) => {
  const l = Math.min(xs.length, ys.length)

  return Array.from({ length: l }, (_, i) => i).reduce(
    (acc, curr) => [...acc, [xs[curr], ys[curr]]],
    [],
  )
}

const uncurry =
  (fn) =>
  ([x, y]) =>
    fn(x, y)

module.exports = hamming
