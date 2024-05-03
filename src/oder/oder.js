function order(words) {
  if (words === '') return words

  return words
    .split(' ')
    .sort((a, b) => {
      return a.match(/\d/) - b.match(/\d/)
    })
    .join(' ')
}

module.exports = order
