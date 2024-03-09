function cakes (recipe, available) {
  return Object.keys(recipe).every(grocery => available[grocery])
    ? Math.floor(Object.keys(recipe).reduce((acc, curr) => Math.min(acc, available[curr] / recipe[curr]), Number.MAX_VALUE))
    : 0
}

module.exports = cakes
