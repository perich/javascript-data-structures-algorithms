// reverse a linked list
// can you do it in place? how about with constant space?
const LinkedList = require('../data-structures/LinkedList')

// naive reversal with stack and new list
function linearSpaceReverse(list) {
  const stack = []
  let node = list.head
  if (!node) throw new Error('list has no nodes')

  while (node) {
    stack.push(node)
    node = node.next
  }

  node = stack.pop()
  const newList = new LinkedList()
  newList.addToTail(node.value)

  while (stack.length) {
    const nextNode = stack.pop()
    newList.addToTail(nextNode.value)
    node = nextNode
  }

  return newList
}

let list = new LinkedList()

list.addToTail(1)
list.addToTail(2)
list.addToTail(3)

console.log('linear space reversal')
console.log(list)
console.log(linearSpaceReverse(list))

// in place reversal with O(1) space
function constantSpaceReverse(list) {
  let node = list.head
  if (!node) throw new Error('list has no nodes')

  let prev = node
  let current = prev.next
  let next = current.next
  list.tail = node

  while (current !== null) {
    current.next = prev
    prev = current
    current = next
    next = current !== null ? current.next : null

    if (current === null) {
      list.head = prev
    }
  }

  return list
}

list = new LinkedList()

list.addToTail(1)
list.addToTail(2)
list.addToTail(3)

console.log('constant space reversal')
console.log(list)
console.log(constantSpaceReverse(list))
