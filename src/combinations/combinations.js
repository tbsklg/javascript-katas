function solve(arrays) {
  return arrays
    .map((arr) => new Set(arr))
    .map((arr) => arr.size)
    .reduce((acc, curr) => acc * curr, 1);
}

module.exports = solve;
