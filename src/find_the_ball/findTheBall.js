function findTheBall(start, [x, ...xs]) {
  if (x === undefined) return start;

  const [from, to] = x;
  if (start === from) return findTheBall(to, xs);
  if (start === to) return findTheBall(from, xs);

  return findTheBall(start, xs);
}

module.exports = findTheBall;
