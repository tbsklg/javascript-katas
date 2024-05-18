function solution(str, ending) {
  return (
    str
      .split('')
      .slice(str.length - ending.length)
      .join('') === ending
  );
}

// return str.endsWith(ending);

module.exports = solution;
