function thirt (n) {
  const digits = ('' + n).split('').reverse()

  const res = calculateSum(digits, 0)

  function calculateSum (d, i) {
    if (d.length === 0) {
      return 0
    }

    const x = Math.pow(10, i) % 13
    const head = +d[0]
    const tail = d.slice(1)
    return (head * x) + calculateSum(tail, i + 1)
  }

  if (res === n) {
    return res
  }

  return thirt(res)
}

module.exports = thirt
