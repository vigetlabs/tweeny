module.exports = function easeInQuint(t, b, c, d) {
  return c*(t /= d)*t*t*t*t + b;
}
