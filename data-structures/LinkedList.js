class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  // add a new node to the list in O(1) time and return the new length of the list
  addToTail(value) {
    const node = this._createNode(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++
    return this.length
  }

  // remove and return the head of the list in O(1) time
  removeHead() {
    const prevHead = this.head

    if (this.head === null) return

    if (prevHead.next === null) {
      this.head = null
      this.tail = null
    } else {
      this.head = prevHead.next
      prevHead.next = null
    }

    this.length--
    return prevHead
  }

  // does the list contain val? return bool in O(n) time
  contains(val) {
    if (this.head === null) return
    let node = this.head
    while (node && node.value) {
      if (node.value === val) return true
      node = node.next
    }
    return false
  }

  // return the number of nodes in the list
  size() {
    return this.length
  }

  // creates a new node to be used in the list
  _createNode(value) {
    return { value, next: null }
  }
}

module.exports = LinkedList
