module.exports = function easeInCirc(t, b, c, d) {
  return -c * (Math.sqrt(1 - (t /= d)*t) - 1) + b;
}