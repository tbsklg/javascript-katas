const start = (fn) => fn([])
const end = (stack) => stack[0]
const push = (stack) => (x) => (fn) => fn([x, ...stack])
const add =
  ([a, b, ...stack]) =>
  (fn) =>
    fn([a + b, ...stack])
const sub =
  ([a, b, ...stack]) =>
  (fn) =>
    fn([a - b, ...stack])
const mul =
  ([a, b, ...stack]) =>
  (fn) =>
    fn([a * b, ...stack])
// ~~ is a bitwise NOT operator, which is a shortcut for Math.trunc.
// see https://stackoverflow.com/a/5971668
const div =
  ([a, b, ...stack]) =>
  (fn) =>
    fn([~~(a / b), ...stack])

module.exports = { start, end, push, add, sub, mul, div }
