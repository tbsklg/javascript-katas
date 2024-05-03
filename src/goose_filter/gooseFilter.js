function gooseFilter(birds) {
  const geese = [
    'African',
    'Roman Tufted',
    'Toulouse',
    'Pilgrim',
    'Steinbacher',
  ]

  return birds.filter((bird) => !geese.find((g) => g === bird))
}

module.exports = gooseFilter
