// input: names - unsorted strings
// output: case-agnostic sort
const sortme = function (names) {
  return names.sort((a, b) => (a.toLowerCase() >= b.toLowerCase() ? 1 : -1));
  // first.toLowerCase().localeCompare(second.toLowerCase())
};

module.exports = sortme;
