function sortArray(array) {
  const oddsAsc = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b)
  const evensDesc = array.filter((n) => n % 2 === 0).sort((a, b) => b - a)

  const sortByParity = ([head, ...tail], odds, evens) => {
    if (head === undefined) return []

    if (head % 2 === 0) {
      return [evens[0], ...sortByParity(tail, odds, evens.slice(1))]
    } else {
      return [odds[0], ...sortByParity(tail, odds.slice(1), evens)]
    }
  }

  return sortByParity(array, oddsAsc, evensDesc)
}

module.exports = sortArray
