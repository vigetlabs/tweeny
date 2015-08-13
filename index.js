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
    let state = {}
    for(let propertyName in this.options.to) {
      const b = this.options.from[propertyName]
      const c = this.options.to[propertyName] - b
      state[propertyName] = this.options.easingFunction(this.elapsedTime, b, c, this.options.duration)
    }
    return state
  },

  update: function() {
    const now = Tween.time.now()
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
  onComplete: () => {},
  onUpdate: () => {}
}

Tween.time = window.performance || window.Date

module.exports = Tween
