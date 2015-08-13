module.exports = function easeInQuart(t, b, c, d) {
  return c*(t /= d)*t*t*t + b;
}