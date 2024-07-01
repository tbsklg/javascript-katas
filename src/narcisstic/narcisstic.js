function narcissistic(value) {
  const ds = digits(value);

  return ds.reduce((acc, d) => acc + d ** ds.length, 0) === value;
}

const digits = (xs) => xs.toString().split('').map(Number);

module.exports = narcissistic;
