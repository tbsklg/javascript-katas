function validParentheses(parenStr) {
  if (parenStr === '') return true;
  if (parenStr.at(0) !== '(') return false;

  const validate = (parens, stack = []) => {
    if (parens.length === 0) return stack.length === 0;

    const [x, ...xs] = parens;

    if (x === '(') return validate(xs, [')', ...stack]);

    if (x === ')' && (stack.at(0) || '') === ')')
      return validate(xs, stack.slice(1));

    return false;
  };

  return validate([...parenStr]);
}

module.exports = validParentheses;
