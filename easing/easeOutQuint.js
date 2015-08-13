module.exports = function easeOutQuint(t, b, c, d) {
  return c*((t=t/d-1)*t*t*t*t + 1) + b;
}