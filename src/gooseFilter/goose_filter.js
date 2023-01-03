function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter(bird => !geese.find(g => g === bird))
}

module.exports = gooseFilter
