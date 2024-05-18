const uniqueInOrder = function (iterable) {
  if (iterable.length === 0) return [];

  const [head, ...tail] = iterable;

  return [head, ...uniqueInOrder(tail)].filter(
    (item, index, array) => item !== array[index - 1],
  );
};

module.exports = uniqueInOrder;
