const firstNonRepeatingLetter = (s) => {
  const go = (xs) => {
    const h = safeHead(xs, '')
    const hl = h.toLowerCase()
    const t = tail(xs)
    const tl = t.toLowerCase()

    if (!tl.includes(hl) || isEmpty(t)) return h

    return go(
      chars(t)
        .filter((x) => x !== h)
        .join('')
    )
  }

  return go([...s].filter(isLetter).join(''))
}

const isLetter = (xs) => /^[a-zA-Zﬁ,0-9]+/.test(xs)
const isEmpty = (xs) => xs === ''
const chars = (xs) => [...xs]
const tail = (xs) => [...xs].splice(1).join('')
const safeHead = (xs, fallback) => xs[0] || fallback

module.exports = firstNonRepeatingLetter
