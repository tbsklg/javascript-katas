const pipe =
  (fn, ...fns) =>
  (...params) =>
    fns.reduce((acc, curr) => curr(acc), fn(...params));

const words = (str) => str.split(space);

const space = ' ';

const reverseWhen = (fn) => (str) =>
  fn(str) ? [...str].reverse().join('') : str;

const reverseWhenGreaterThanFour = (ws) =>
  ws.map(reverseWhen((str) => str.length > 4));

const unwords = (ws) => ws.join(space);

const spinWords = pipe(words, reverseWhenGreaterThanFour, unwords);

module.exports = spinWords;
