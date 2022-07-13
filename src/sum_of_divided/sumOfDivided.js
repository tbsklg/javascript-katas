function sumOfDivided(lst) {
    const maximum = Math.max(...lst.map(e => Math.abs(e)))

    let result = []
    for (let prime = 2; prime <= maximum; prime = nextPrime(prime)) {
        const factors = lst.filter(e => e % prime === 0)

        if (factors.length === 0) continue

        const sumByFactor = factors.reduce((pre, curr) => pre + curr, 0)
        result = [...result, [prime, sumByFactor]]
    }

    return result
}

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function nextPrime(n) {
    return !isPrime(++n) ? nextPrime(n++) : n
}

module.exports = sumOfDivided
