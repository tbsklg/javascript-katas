function meeting (x, need) {
  if (need === 0) return 'Game On'

  const countChairs = (rooms, neededChairs) => {
    if (rooms.length === 0 && neededChairs > 0) throw Error()
    if (neededChairs === 0 || rooms.length === 0) return []

    const [head, ...tail] = rooms

    const [occupants, chairs] = head

    const freeChairs = Math.max(0, chairs - occupants.length)
    const takenChairs = Math.min(freeChairs, neededChairs)
    const nextNeededChairs = neededChairs - takenChairs

    return [takenChairs, ...countChairs(tail, nextNeededChairs)]
  }

  try {
    return countChairs(x, need)
  } catch (_) {
    return 'Not enough!'
  }
}

module.exports = meeting
