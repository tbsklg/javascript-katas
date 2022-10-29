function add (a, b) {
  const addWithCarry = (digitsA, digitsB, currentCarry, interimResult) => {
    if (digitsA.length === 0 && digitsB.length === 0) return prependCarry(currentCarry, interimResult)

    const [headOfA, ...restOfA] = digitsA
    const [headOfB, ...restOfB] = digitsB

    const { unitPosition, carry } = additionOf(headOfA, headOfB, currentCarry)
    const nextInterimResult = unitPosition + interimResult

    return addWithCarry(restOfA, restOfB, carry, nextInterimResult)
  }

  return addWithCarry(a.split('').reverse(), b.split('').reverse(), 0, '')
}

function prependCarry (carry, digits) {
  return carry === 0 ? digits : carry + digits
}

function additionOf (...args) {
  return {
    unitPosition: calculateUnitPosition(...args),
    carry: calculateCarry(...args)
  }
}

function calculateUnitPosition (...args) {
  const sumOfArgs = args
    .map(a => parseInt(a || '0'))
    .reduce((acc, curr) => acc + curr)

  return sumOfArgs % 10
}

function calculateCarry (...args) {
  const sumOfArgs = args
    .map(a => parseInt(a || '0'))
    .reduce((acc, curr) => acc + curr)

  return Math.floor(sumOfArgs / 10)
}

module.exports = add
