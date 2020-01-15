const LinkedList = require('./LinkedList')

let linkedList
beforeEach(() => {
  linkedList = new LinkedList()

  linkedList.addToTail(1)
  linkedList.addToTail(2)
  linkedList.addToTail(3)
})

test('addToTail() should set both the head and tail when the first value is added to an empty list', () => {
  linkedList = new LinkedList()
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
  linkedList = new LinkedList()

  linkedList.addToTail(1)
  linkedList.removeHead()

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
