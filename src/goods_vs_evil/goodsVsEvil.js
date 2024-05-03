function goodVsEvil(good, evil) {
  const goodsScore = sum(zipWith(multiply)(numbers(good), goodsWorth))
  const evilsScore = sum(zipWith(multiply)(numbers(evil), evilsWorth))

  if (goodsScore > evilsScore) return goodsWin
  if (evilsScore > goodsScore) return evilsWin

  return draw
}

const goodsWin = 'Battle Result: Good triumphs over Evil'
const evilsWin = 'Battle Result: Evil eradicates all trace of Good'
const draw = 'Battle Result: No victor on this battle field'

const goodsWorth = [1, 2, 3, 3, 4, 10]
const evilsWorth = [1, 2, 2, 2, 3, 5, 10]

const zipWith = (fn) => (xs, ys) => xs.map((x, i) => (ys[i] ? fn(x, ys[i]) : x))
const multiply = (x, y) => x * y
const sum = (xs) => xs.reduce((acc, curr) => acc + curr, 0)
const numbers = (xs) => words(xs).map(Number)
const words = (xs) => xs.split(' ')

module.exports = goodVsEvil
