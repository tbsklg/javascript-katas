function cakes(recipe, available) {
  return Math.floor(
    Object.keys(recipe).reduce(
      (acc, ingredient) =>
        Math.min(acc, (available[ingredient] || 0) / recipe[ingredient]),
      Number.MAX_VALUE,
    ),
  );
}

module.exports = cakes;
