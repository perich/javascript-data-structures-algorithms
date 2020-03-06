// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(fn, timer) {
  let timeout = null

  return function(...args) {
    const context = this
    function later() {
      timeout = null
      fn.apply(context, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, timer)
  }
}

class Graham {
  constructor() {
    this.name = 'graham'
  }

  speak(...args) {
    console.log(`my name is ${this.name}`, ...args)
  }
}

const g = new Graham()

const dSpeak = debounce(g.speak, 1000)

// `this` gets bound, function only gets called 1 time
dSpeak.call(g, 'foo')
dSpeak.call(g, 'foo')
dSpeak.call(g, 'foo')
dSpeak.call(g, 'foo')
dSpeak.call(g, 'foo')

// `this` does not get bound, function still gets called since it's after debounce period
setTimeout(() => {
  dSpeak('foo')
}, 2000)
