function titleCase(title, minorWords) {
  const [head, ...tail] = title.split(' ');

  return [
    capitalize(head),
    ...tail.map((word) => {
      if (
        !minorWords ||
        !minorWords
          .split(' ')
          .some((minorWord) => minorWord.toLowerCase() === word.toLowerCase())
      ) {
        return capitalize(word);
      }
      return word.toLowerCase();
    }),
  ].join(' ');
}

function capitalize(word) {
  return word.toLowerCase().replace(/\w/, (first) => first.toUpperCase());
}

module.exports = titleCase;
