function problem(x) {
  if (typeof x !== 'number') {
    return 'Error'
  }

  return 50 * x + 6
}

module.exports = problem
