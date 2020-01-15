// now implement a doubly linked list
class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  // add a value to the tail of the linked list, and return a reference to the newly created node
  addToTail(value) {
    const newNode = this._createNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return newNode
  }

  // remove the head node and return the severed node
  removeHead() {
    if (this.head === null) return
    const prevHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    this.length--
    prevHead.next = null
    return prevHead
  }

  // remove the tail node and return the severed node
  removeTail() {
    if (this.tail === null) return
    const prevTail = this.tail

    if (this.tail.prev) {
      this.tail = prevTail.prev
    } else {
      this.head = null
      this.tail = null
    }

    this.length--
    prevTail.prev = null
    return prevTail
  }

  // remove a node from the list and return the severed node
  remove(node) {
    if (!node) return
    if (node === this.head) return this.removeHead()
    if (node === this.tail) return this.removeTail()
    this.length--
    node.prev.next = node.next
    node.next = null
    node.prev = null
    return node
  }

  // does the list contain value? return bool in O(n) time
  contains(value) {
    if (this.head === null) return false

    function inner(node) {
      if (node.value === value) return true
      if (node.next !== null) return inner(node.next)
      return false
    }

    return inner(this.head)
  }

  // return the number of nodes in the list
  size() {
    return this.length
  }

  _createNode(value) {
    return { value, next: null, prev: null }
  }
}

module.exports = DoublyLinkedList
