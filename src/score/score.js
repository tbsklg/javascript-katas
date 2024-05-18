function score(dice) {
  if (dice.length === 0) return 0;

  const [head, ...tail] = dice;
  const matches = dice.filter((die) => die === head);

  const remaining = () => dice.filter((roll) => roll !== head);
  if (matches.length === 3) return three(head) + score(remaining());

  return one(head) + score(tail);
}

function three(n) {
  if (n === 1) return 1000;
  return n * 100;
}

function one(n) {
  if (n === 1) return 100;
  if (n === 5) return 50;
  return 0;
}

module.exports = score;
