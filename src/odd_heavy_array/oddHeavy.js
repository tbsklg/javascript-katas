function isOddHeavy (n) {
  const odds = n.filter(x => x % 2 !== 0)
  const evens = n.filter(x => x % 2 === 0)

  return odds.length > 0 && odds.reduce((previous, current) =>
    previous && evens.every(x => x < current)
  , true)
}

module.exports = isOddHeavy
