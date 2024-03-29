const spacey = (xs) => tail(xs).reduce((acc, curr) => [...acc, last(acc) + curr], [head(xs)])

const tail = (xs) => xs.slice(1)
const last = (xs) => xs.at(-1)
const head = (xs) => xs[0]

module.exports = spacey
