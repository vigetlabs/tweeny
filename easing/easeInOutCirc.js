module.exports = function easeInOutCirc(t, b, c, d) {
  if ((t /= d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
  return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
}
