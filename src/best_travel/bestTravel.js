const chooseBestSum = (t, k, ls) => {
  const possibleRoutes = routes(k, ls);
  const distances = possibleRoutes.map((r) => r.reduce((a, b) => a + b, 0));

  const validRoutes = distances.filter((d) => d <= t);
  return validRoutes.length > 0 ? Math.max(...validRoutes) : null;
};

const routes = (n, d) => {
  if (n === 0 && d.length === 0) return [[]];
  if (d.length === 0) return [];

  const [x, ...xs] = d;

  return routes(n - 1, xs)
    .map((r) => [x, ...r])
    .concat(routes(n, xs));
};

module.exports = chooseBestSum;
