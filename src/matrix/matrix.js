function matrix(array) {
  return Array(array.length)
    .fill()
    .map((_, i) => {
      const row = array[i];
      return [...row.slice(0, i), row[i] < 0 ? 0 : 1, ...row.slice(i + 1)];
    });
}

module.exports = matrix;
