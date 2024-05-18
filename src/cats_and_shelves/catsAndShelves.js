const solution = (start, finish) => {
  if (start === finish) return 0;

  if (finish - start >= 3) return 1 + solution(start + 3, finish);

  return 1 + solution(start + 1, finish);
};

module.exports = solution;
