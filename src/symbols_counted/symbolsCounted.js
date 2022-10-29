const transform = s => {
  if (s.length === 0) return ''

  const [head] = s.split('')
  const count = s.split('').filter(x => x === head).length
  const next = s.split('').filter(x => x !== head).join('')

  if (count > 1) return head + count + transform(next)

  return head + transform(next)
}

module.exports = transform
