function expandedForm (num) {
  return (num + '')
    .split('')
    .map((x) => Number(x))
    .reverse()
    .reduce((acc, curr, i) => [...acc, Math.pow(10, i) * curr], [])
    .filter(x => x !== 0)
    .reverse()
    .join(' + ')
}

module.exports = expandedForm
