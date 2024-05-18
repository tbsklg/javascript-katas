function gap(g, m, n) {
  const findGap = (primes, current) => {
    const next = primes.next().value;

    if (!next) return null;

    if (current + g === next) return [current, next];

    return findGap(primes, next);
  };

  const ps = primes(m, n);
  return findGap(ps, ps.next().value);
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

function* primes(m, n) {
  for (let i = m; i < n; i++) {
    if (isPrime(i)) yield i;
  }
}

module.exports = gap;
