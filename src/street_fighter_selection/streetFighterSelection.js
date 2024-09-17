function streetFighterSelection(fighters, position, moves) {
  if (moves.length === 0) return [];

  const move = (currentPosition, moves, result = []) => {
    if (moves.length === 0) return result;

    const [currentMove, ...furtherMoves] = moves;
    const nextPosition = nextCursor(currentPosition, currentMove);
    const fighter = getFighter(fighters, nextPosition);
    const nextResult = [...result, fighter];

    if (result.length === 0) {
      return move(nextPosition, furtherMoves, nextResult);
    }

    return move(nextPosition, furtherMoves, nextResult);
  };

  const getFighter = (fighters, [x, y]) => fighters[x][y];

  const nextCursor = ([x, y], move) => {
    if (move === 'up') {
      return [Math.max(x - 1, 0), y];
    }

    if (move === 'down') {
      return [Math.min(x + 1, 1), y];
    }

    if (move === 'left') {
      return [x, (y - 1 + 6) % 6];
    }

    if (move === 'right') {
      return [x, (y + 1) % 6];
    }

    throw new Error(`Move ${move} is not valid`);
  };

  return move(position, moves, []);
}

module.exports = streetFighterSelection;
