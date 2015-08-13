module.exports = function easeOutQuart(t, b, c, d) {
  return -c * ((t=t/d-1)*t*t*t - 1) + b;
}