const start = (fn) => fn([])
const end = (stack) => stack[0]
const push = (stack) => (x) => (fn) => fn([...stack, x])
const add = (stack) => (fn) =>
  fn([...stack.slice(0, -2), stack.at(-1) + stack.at(-2)])
const sub = (stack) => (fn) =>
  fn([...stack.slice(0, -2), stack.at(-1) - stack.at(-2)])
const mul = (stack) => (fn) =>
  fn([...stack.slice(0, -2), stack.at(-1) * stack.at(-2)])
// ~~ is a bitwise NOT operator, which is a shortcut for Math.floor.
// see https://stackoverflow.com/a/5971668
const div = (stack) => (fn) =>
  fn([...stack.slice(0, -2), ~~(stack.at(-1) / stack.at(-2))])

module.exports = { start, end, push, add, sub, mul, div }
