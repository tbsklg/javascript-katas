function solution(number) {
  return Array.from({ length: number }, (_, v) => v)
    .filter((x) => x % 3 === 0 || x % 5 === 0)
    .reduce((acc, curr) => acc + curr, 0)
}

module.exports = solution
