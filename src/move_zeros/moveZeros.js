const moveZeros = (arr) => {
  const withoutZeros = arr.filter((x) => x !== 0);
  const zeros = arr.filter((x) => x === 0);

  return [...withoutZeros, ...zeros];
};

module.exports = moveZeros;
