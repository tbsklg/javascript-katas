function swap(s, n) {
  if (s === '') return '';

  const swapCase = ([x, ...xs], [b, ...bs]) => {
    if (x === undefined) return '';
    if (x === ' ') return [' ', ...swapCase(xs, [b, ...bs])];

    if (b === 1 && isUpperCase(x))
      return [x.toLowerCase(), ...swapCase(xs, [...bs, b])];
    if (b === 1 && isLowerCase(x))
      return [x.toUpperCase(), ...swapCase(xs, [...bs, b])];
    if (b === 0 && isAlpha(x)) return [x, ...swapCase(xs, [...bs, b])];
    return [x, ...swapCase(xs, [b, ...bs])];
  };

  return swapCase(s.split(''), toBinary(n)).join('');
}

const isAlpha = (c) => {
  return /[a-zA-Z]/.test(c);
};

const isLowerCase = (c) => {
  return /[a-z]/.test(c);
};

const isUpperCase = (c) => {
  return /[A-Z]/.test(c);
};

const toBinary = (i) => {
  if (i === 0) return [];

  return [...toBinary(Math.floor(i / 2)), i % 2];
};

module.exports = swap;
