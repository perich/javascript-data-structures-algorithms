// empty() – Returns whether the stack is empty – Time Complexity : O(1)
// size() – Returns the size of the stack – Time Complexity : O(1)
// top() – Returns a reference to the top most element of the stack – Time Complexity : O(1)
// push(g) – Adds the element ‘g’ at the top of the stack – Time Complexity : O(1)
// pop() – Deletes the top most element of the stack – Time Complexity : O(1)

class Stack {
  constructor() {
    this.store = {}
    this.height = 0
  }

  empty() {
    return this.height === 0
  }

  size() {
    return this.height
  }

  push(val) {
    this.height++
    const topIndex = this.height
    this.store[topIndex] = val
  }

  pop() {
    if (this.height === 0) return
    const topVal = this.store[this.height]
    this.height--
    return topVal
  }

  top() {
    return this.store[this.height]
  }
}

module.exports = Stack
