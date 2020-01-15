const { Queue, LinkedListPoweredQueue, StackPoweredQueue } = require('./Queue')

let queue
let stackQueue
let linkedListQueue
beforeEach(() => {
  queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  stackQueue = new StackPoweredQueue()
  stackQueue.enqueue(1)
  stackQueue.enqueue(2)
  stackQueue.enqueue(3)

  linkedListQueue = new LinkedListPoweredQueue()
  linkedListQueue.enqueue(1)
  linkedListQueue.enqueue(2)
  linkedListQueue.enqueue(3)
})

test('It should operate as a FIFO structure', () => {
  queue.dequeue()
  expect(queue.peak()).toBe(2)

  stackQueue.dequeue()
  expect(stackQueue.peak()).toBe(2)

  linkedListQueue.dequeue()
  expect(linkedListQueue.peak()).toBe(2)
})

test('dequeue() should remove and return the head()', () => {
  let lastItem = queue.dequeue()
  expect(lastItem).toBe(1)
  expect(queue.peak()).toBe(2)
  expect(queue.size).toBe(2)

  lastItem = stackQueue.dequeue()
  expect(lastItem).toBe(1)
  expect(stackQueue.peak()).toBe(2)
  expect(stackQueue.size).toBe(2)

  lastItem = linkedListQueue.dequeue()
  expect(lastItem).toBe(1)
  expect(linkedListQueue.peak()).toBe(2)
  expect(linkedListQueue.size).toBe(2)
})

test('isEmpty() should return false when no items are present', () => {
  queue.dequeue()
  queue.dequeue()
  queue.dequeue()
  expect(queue.isEmpty()).toBe(true)

  stackQueue.dequeue()
  stackQueue.dequeue()
  stackQueue.dequeue()
  expect(stackQueue.isEmpty()).toBe(true)

  linkedListQueue.dequeue()
  linkedListQueue.dequeue()
  linkedListQueue.dequeue()
  expect(linkedListQueue.isEmpty()).toBe(true)
})

test('isEmpty() should return true when at least one item is present', () => {
  expect(queue.isEmpty()).toBe(false)
  expect(stackQueue.isEmpty()).toBe(false)
  expect(linkedListQueue.isEmpty()).toBe(false)
})
