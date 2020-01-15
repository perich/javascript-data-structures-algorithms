const Stack = require('./Stack.js')

// enqueue() add a new item to the back of the queue
// dequeue()
// peak() return front of the queue
// isEmpty()

class Queue {
  constructor() {
    this.store = {}
    this.headIndex = 0
    this.tailIndex = 0
    this.size = 0
  }

  enqueue(val) {
    this.store[this.size] = val
    this.tailIndex++
    this.size++
  }

  dequeue() {
    const headItem = this.store[this.headIndex]
    if (!headItem) return
    this.headIndex++
    this.size--
    return headItem
  }

  peak() {
    return this.store[this.headIndex]
  }

  isEmpty() {
    return this.size === 0
  }
}

// now implement a queue using a linked list
class LinkedListPoweredQueue {}

// now implement a queue using two stacks
class StackPoweredQueue {}

module.exports = { Queue, LinkedListPoweredQueue, StackPoweredQueue }
