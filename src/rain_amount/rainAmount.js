function rainAmount(mm) {
  if (mm >= 40) {
    return 'Your plant has had more than enough water for today!'
  }

  return `You need to give your plant ${40 - mm}mm of water`
}

module.exports = rainAmount
