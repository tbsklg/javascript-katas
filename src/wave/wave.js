function wave(str) {
  const createWave = (str, [i, ...is]) => {
    if (i === undefined) return []

    const letters = str.split('')
    const letter = letters[i]

    if (letter === ' ') return createWave(str, is)

    const preLetter = letters.slice(0, i).join('')
    const postLetter = letters.slice(i + 1).join('')
    const newStr = preLetter + letter.toUpperCase() + postLetter

    return [newStr, ...createWave(str, is)]
  }

  return createWave(
    str,
    Array.from({ length: str.length }, (_, i) => i),
  )
}

module.exports = wave
