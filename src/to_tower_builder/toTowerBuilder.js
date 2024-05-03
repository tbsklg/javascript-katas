function towerBuilder(nFloors) {
  const build = (i) => {
    if (i > nFloors) return []

    const stars = '*'.repeat(i * 2 - 1)
    const spaces = ' '.repeat(nFloors - i)
    return [spaces + stars + spaces, ...build(i + 1)]
  }

  return build(1)
}

module.exports = towerBuilder
