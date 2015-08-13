module.exports = function easeInCubic(t, b, c, d) {
  return c*(t /= d)*t*t + b;
}
