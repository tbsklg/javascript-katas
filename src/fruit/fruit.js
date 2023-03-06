function fruit ([leftReel, middleReel, rightReel], [leftSpin, middleSpin, rightSpin]) {
  const left = leftReel[leftSpin]
  const middle = middleReel[middleSpin]
  const right = rightReel[rightSpin]

  const score = ([leftScore, middleScore, rightScore]) => {
    if (leftScore === middleScore && middleScore === rightScore) return scoreOf[leftScore]
    if (leftScore === middleScore) {
      const currentScore = scoreOf[leftScore] / 10
      if (rightScore === 'Wild') return currentScore * 2
      return currentScore
    }

    if (middleScore === rightScore) {
      const currentScore = scoreOf[middleScore] / 10
      if (leftScore === 'Wild') return currentScore * 2
      return currentScore
    }

    return 0
  }

  const scoreOf = {
    Wild: 100,
    Star: 90,
    Bell: 80,
    Shell: 70,
    Seven: 60,
    Cherry: 50,
    Bar: 40,
    King: 30,
    Queen: 20,
    Jack: 10
  }

  return score([left, middle, right].sort())
}

module.exports = fruit
