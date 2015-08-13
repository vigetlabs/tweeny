module.exports = function easeOutElastic(t, b, c, d) {
  var s=1.70158;var p=0;var a=c;
  if (t===0) return b;  if ((t /= d)===1) return b+c;  if (!p) p=d*0.3;
  if (a < Math.abs(c)) { a=c; s=p/4; }
  else s = p/(2*Math.PI) * Math.asin (c/a);
  return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
}