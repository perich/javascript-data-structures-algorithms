// leetcode difficulty: medium
// LRU is the acronym of Least Recently Used cache

// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:
// LRUCache cache = new LRUCache( 2 /* capacity */ );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  createNode(key, value) {
    return { key, value, next: null, prev: null }
  }

  remove(node) {
    let current = this.head
    while (current !== node && current !== null) {
      current = current.next
    }
    const next = current.next
    const prev = current.prev

    if (next) {
      next.prev = prev
    } else {
      // if there is no next, this was the tail
      this.tail = prev
    }

    if (prev) {
      prev.next = next
    } else {
      // if there is no prev, this was the head
      this.head = next
    }

    this.size--
    current.next = null
    current.prev = null
    return current
  }

  addToHead(node) {
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      const oldHead = this.head
      oldHead.prev = node
      node.next = oldHead
      this.head = node
    }
    this.size++
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.map = {}
  this.list = new DoublyLinkedList()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.map[key]
  if (!node) return null

  const accessedNode = this.list.remove(node)
  this.list.addToHead(accessedNode)

  return node.value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.list.size === this.capacity) {
    const removed = this.list.remove(this.list.tail)
    delete this.map[removed.key]
  }

  const newNode = this.list.createNode(key, value)
  this.list.addToHead(newNode)
  this.map[key] = newNode
}

const cache = new LRUCache(5)

cache.put('a', 1)
cache.put('b', 2)
cache.put('c', 3)
cache.put('d', 4)
cache.put('e', 5)
console.log(cache.get('a')) // should be present
cache.put('f', 6)
cache.put('g', 7)
console.log(cache.get('b')) // should be gone
console.log(cache.get('a')) // should still be here
console.log(cache.get('c')) // should be gone
console.log(cache.get('d')) // should be present
