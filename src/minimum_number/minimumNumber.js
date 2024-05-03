function minimumNumber(numbers) {
  const nextPrimeFrom = (x) => {
    const isPrime = (x) => {
      const tail = Array.from({ length: x - 1 }, (_, i) => i + 1).slice(1)
      return tail.every((z) => x % z !== 0)
    }

    if (isPrime(x)) return x

    return nextPrimeFrom(x + 1)
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0)

  return nextPrimeFrom(sum) - sum
}

module.exports = minimumNumber
