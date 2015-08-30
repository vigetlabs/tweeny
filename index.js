var objectAssign = require('object-assign')
var linear       = require('./easing/linear')

var Tween = function(settings) {
  this.options = objectAssign(Tween.defaults, settings)
  this.lastTime = Tween.time.now()
  this.elapsedTime = 0
  this.update()
}

Tween.prototype = {
  getState: function() {
    var state = {}
    for(var propertyName in this.options.to) {
      var b = this.options.from[propertyName]
      var c = this.options.to[propertyName] - b
      state[propertyName] = this.options.easingFunction(this.elapsedTime, b, c, this.options.duration)
    }
    return state
  },

  update: function() {
    var now = Tween.time.now()
    this.elapsedTime += (now - this.lastTime)
    this.lastTime = now
    if(this.elapsedTime >= this.options.duration) {
      this.options.onUpdate(this.options.to)
      this.options.onComplete()
    } else {
      this.options.onUpdate(this.getState())
      requestAnimationFrame(this.update.bind(this))
    }
  }
}

Tween.defaults = {
  duration: 500,
  easingFunction: linear,
  onComplete: function() {},
  onUpdate: function() {}
}

Tween.time = window.performance || window.Date

Tween.time.now = Tween.time.now || function() {
  return new Date().getTime()
}

module.exports = Tween
