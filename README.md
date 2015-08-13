# Tweeny
A teeny tween class!

```
npm install --save tweeny
```

## Usage
```js
var Tween          = require('tweeny')
var easeInOutQuart = require('tweeny/easing/easeInOutQuart')

var target = document.querySelector('#thing')

var tween = new Tween({
  from: { opacity: 0 },
  to: { opacity: 1 },
  duration: 1000,
  easing: easeInOutQuart,
  onUpdate: function(state) {
    target.style.opacity = state.opacity
  },
  onComplete: function() {
    alert('done!')
  }
})
```

For < IE 10 support, you'll need to `requestAnimationFrame` polyfill.

Easing functions by [Robert Penner](http://robertpenner.com/easing).
