const DoublyLinkedList = require('./DoublyLinkedList')

let linkedList
beforeEach(() => {
  linkedList = new DoublyLinkedList()

  linkedList.addToTail(1)
  linkedList.addToTail(2)
  linkedList.addToTail(3)
})

test('addToTail() should set both the head and tail when the first value is added to an empty list', () => {
  linkedList = new DoublyLinkedList()
  linkedList.addToTail(1)
  expect(linkedList.head.value).toBe(1)
  expect(linkedList.tail.value).toBe(1)
})

test('removeHead() should return the head of the list', () => {
  expect(linkedList.removeHead().value).toBe(1)
})

test('removeHead() should set the new head correctly', () => {
  linkedList.removeHead()
  expect(linkedList.head.value).toBe(2)
})

test('removeHead() should set both head and tail to null if head is removed when there is only 1 node', () => {
  linkedList = new DoublyLinkedList()

  linkedList.addToTail(1)
  linkedList.removeHead()

  expect(linkedList.head).toBe(null)
  expect(linkedList.tail).toBe(null)
})

test('if remove() is called on a node in the middle of the list, the list should still maintain a proper link between all nodes', () => {
  const thirdToLastNode = linkedList.addToTail('foo')
  linkedList.addToTail('bar')
  linkedList.addToTail('bar')

  linkedList.remove(thirdToLastNode)
  expect(linkedList.size()).toBe(5)

  node = linkedList.head
  iterations = 0
  while (node && node.next) {
    iterations++
    node = node.next
  }
  expect(iterations).toBe(4)
})

test('The list should be doubly linked', () => {
  linkedList.addToTail(4)
  linkedList.addToTail(5)
  linkedList.addToTail(6)
  let iterations = 0
  let node = linkedList.tail

  while (node && node.prev) {
    iterations++
    node = node.prev
  }
  expect(iterations).toBe(linkedList.size() - 1)
  expect(iterations).toBe(5)

  node = linkedList.head
  iterations = 0
  while (node && node.next) {
    iterations++
    node = node.next
  }

  expect(iterations).toBe(linkedList.size() - 1)
  expect(iterations).toBe(5)
})

test('removeHead() should set both head and tail to null if tail is removed when there is only 1 node', () => {
  linkedList = new DoublyLinkedList()

  linkedList.addToTail(1)
  linkedList.removeTail()

  expect(linkedList.head).toBe(null)
  expect(linkedList.tail).toBe(null)
})

test('size() should return the correct size of the list', () => {
  expect(linkedList.size()).toBe(3)
})

test('contains() should return false when val not present', () => {
  expect(linkedList.contains(4)).toBe(false)
})

test('contains() should return true when val is present', () => {
  expect(linkedList.contains(3)).toBe(true)
})

test('adding and removing many nodes should work correctly', () => {
  linkedList.removeHead()
  linkedList.removeHead()
  linkedList.removeHead()

  linkedList.addToTail(4)
  expect(linkedList.tail.value).toBe(4)
  expect(linkedList.head.value).toBe(4)
  linkedList.addToTail(6)
  linkedList.addToTail(7)
  linkedList.addToTail(8)
  expect(linkedList.tail.value).toBe(8)
  expect(linkedList.size()).toBe(4)

  expect(linkedList.contains(3)).toBe(false)

  expect(linkedList.contains(4)).toBe(true)
})
