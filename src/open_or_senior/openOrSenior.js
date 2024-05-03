function openOrSenior(data) {
  return data.map(([age, handicap]) => {
    if (age > 54 && handicap > 6) {
      return 'Senior'
    }

    return 'Open'
  })
}

module.exports = openOrSenior
