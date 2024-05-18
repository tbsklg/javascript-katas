function findMissingLetter([x, y, ...xs]) {
  if (y.charCodeAt(0) - x.charCodeAt(0) === 1)
    return findMissingLetter([y, ...xs]);

  return String.fromCharCode(x.charCodeAt(0) + 1);
}

module.exports = findMissingLetter;
