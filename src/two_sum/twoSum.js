function twoSum(numbers, target) {
  const withIndex = (numbers) =>
    numbers.map((number, index) => ({ index, number }));

  const findIndices = (numbersWithIndex) => {
    if (numbersWithIndex.length === 0) return [];

    const [head, ...tail] = numbersWithIndex;
    const result = tail.find(({ number }) => head.number + number === target);
    return result ? [head.index, result.index] : findIndices(tail);
  };

  return findIndices(withIndex(numbers));
}

module.exports = twoSum;
