const sum = (a, b) => a + b
const randocall = (fn) => fn(Math.floor(Math.random() * 6 + 1))

module.exports = {
  sum,
  randocall
}
