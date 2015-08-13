module.exports = function easeInSine(t, b, c, d) {
  return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
}
