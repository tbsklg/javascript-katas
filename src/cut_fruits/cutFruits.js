function cutFruits (fruits) {
  return fruits
    .map(fruit => {
      if (isFruit(fruit)) return cut(fruit)

      return [fruit]
    })
    .reduce((acc, curr) => [...acc, ...curr])
}

function cut (fruit) {
  const isOdd = fruit.length % 2 !== 0
  const half = fruit.length / 2

  if (isOdd) {
    return [fruit.slice(0, half + 1), fruit.slice(half + 1)]
  }

  return [fruit.slice(0, half), fruit.slice(half)]
}

const fruits = ['apple', 'pear', 'banana']

function isFruit (f) {
  return fruits.find(x => x === f)
}

module.exports = cutFruits
