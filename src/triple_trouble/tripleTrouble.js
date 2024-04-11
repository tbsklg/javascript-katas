function tripledouble (num1, num2) {
  const findStraightTripleNumbers = num => digits(num)
    .filter((d, i, ds) => d === ds[i + 1] && ds[i] === ds[i + 2])

  const hasStraightDoubleNumber = (num, xs) => digits(num)
    .find((d, i, ds) => xs.includes(d) && ds[i] === ds[i + 1])

  return hasStraightDoubleNumber(num2, findStraightTripleNumbers(num1)) ? 1 : 0
}

const digits = xs => [...'' + xs]

module.exports = tripledouble
