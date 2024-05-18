function encryptThis(text) {
  return text
    .split(' ')
    .map(([head, ...tail]) => {
      return (
        head.charCodeAt(0) + (tail.length > 1 ? swapFirstAndLast(tail) : tail)
      );
    })
    .join(' ');
}

function swapFirstAndLast(word) {
  const [head, ...tail] = word;
  const last = tail.slice(-1).pop();
  const middle = tail.slice(0, tail.length - 1);
  return last + middle.join('') + head;
}

module.exports = encryptThis;
