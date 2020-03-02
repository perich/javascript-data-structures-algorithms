// implement an EventEmitter class that functions like below

// const emitter = new EventEmitter();
// const sub = emitter.subscribe(eventName, callback); // typeof eventName === string
// emitter.emit(eventName, a, b, c, d, ...);
// sub.unsubscribe();

class EventEmitter {
  constructor() {
    this.events = {}
  }

  subscribe(eventName, cb) {
    if (this.events[eventName]) {
      this.events[eventName].add(cb)
    } else {
      this.events[eventName] = new Set()
      this.events[eventName].add(cb)
    }

    const subManager = {
      unsubscribe: () => this.events[eventName].delete(cb),
    }
    return subManager
  }

  emit(eventName, ...params) {
    if (!this.events[eventName] || this.events[eventName].size === 0) {
      console.log(`no subscriptions to ${eventName}`)
      return
    }
    this.events[eventName].forEach(cb => {
      cb(...params)
    })
  }
}

const emitter = new EventEmitter()
const eventName = 'foo'
const callback = console.log
const sub = emitter.subscribe(eventName, callback)
emitter.emit('foo', 'foo', 'bar', 'baz')
sub.unsubscribe()
emitter.emit('foo', 'foo', 'bar', 'baz')
