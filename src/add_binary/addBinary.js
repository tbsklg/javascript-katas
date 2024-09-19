function addBinary(a, b) {
  return toBinary(a + b)
    .map(String)
    .join('');
}

const toBinary = (x) => {
  if (x === 0) {
    return [];
  }

  return [...toBinary(Math.floor(x / 2)), x % 2];
};

module.exports = addBinary;
