function digitalRoot (n) {
  if (n < 10) return n

  return digitalRoot(digits(n).reduce((pre, curr) => pre + curr))
}

function digits (n) {
  return ('' + n).split('').map(a => parseInt(a))
}

module.exports = {
  digital_root: digitalRoot,
  digits
}
