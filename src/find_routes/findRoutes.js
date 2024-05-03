const findRoutes = (routes) => {
  const starts = routes.map(([x, _]) => x)
  const destinations = routes.map(([_, x]) => x)
  const destination = destinations.find((x) => !starts.includes(x))

  if (!destination) return ''

  const flippedRoutes = flip(routes)

  const route = (current, routes) => {
    const next = routes.find(([x, _]) => x === current)
    if (!next) return [current]

    const [from, to] = next
    return [from, ...route(to, routes)]
  }

  return route(destination, flippedRoutes).reverse().join(', ')
}

const flip = (xs) => [...xs].map(([x, y]) => [y, x])

module.exports = findRoutes
