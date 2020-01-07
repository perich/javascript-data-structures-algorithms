const Stack = require('./stack.js')

function makePancakeStack() {
  const pancakes = new Stack()

  pancakes.push('blueberry')
  pancakes.push('chocolate')
  pancakes.push('bananas')
  return pancakes
}

describe('empty() and push()', () => {
  test('it should return true when no items are present', () => {
    const emptyStack = new Stack()
    expect(emptyStack.empty()).toBe(true)
  })

  test('it should return false when items are present', () => {
    const stack = new Stack()
    stack.push('foo')
    expect(stack.empty()).toBe(false)
  })
})

describe('size()', () => {
  let pancakes = null
  beforeEach(() => {
    pancakes = makePancakeStack()
  })

  test('it should return the correct size when adding items', () => {
    expect(pancakes.size()).toBe(3)
  })

  test('it should return the correct size when removing items', () => {
    pancakes.pop()
    expect(pancakes.size()).toBe(2)
  })
})

describe('pop() and top()', () => {
  let pancakes = null
  beforeEach(() => {
    pancakes = makePancakeStack()
  })

  test('it should return the most recently added item', () => {
    expect(pancakes.top()).toBe('bananas')
    const poppedItem = pancakes.pop()
    expect(poppedItem).toBe('bananas')
  })

  test('it should lower the size of the stack by 1', () => {
    expect(pancakes.size()).toBe(3)
    pancakes.pop()
    expect(pancakes.size()).toBe(2)
  })
})
