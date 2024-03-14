const merge = (x, y) => {
  if (x.length === 0) return y

  if (y.length === 0) return x

  if (x[0] < y[0]) return [head(x), ...merge(tail(x), y)]

  return [head(y), ...merge(x, tail(y))]
}

const head = (x) => x[0]
const tail = (x) => x.slice(1)

module.exports = merge
