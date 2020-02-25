// you are free to create a BST class however you wish
// it must have a method called `getRandom()` that returns a random node from the BST
// all nodes must have an equal probability of being returned by this method
// challenge: can you do it in log(n) time?

const BinarySearchTree = require('../data-structures/BinarySearchTree')

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    // nodes child count, including itself
    this.leftChildrenCount = 1
    this.rightChildrenCount = 1
  }
}

class CustomBST extends BinarySearchTree {
  addNode(value) {
    const newNode = new Node(value)

    const traverse = curr => {
      if (value > curr.value) {
        curr.rightChildrenCount = curr.rightChildrenCount + 1
        if (!curr.right) {
          curr.right = newNode
          this.size++
          return
        }
        traverse(curr.right)
      }
      if (value < curr.value) {
        curr.leftChildrenCount = curr.leftChildrenCount + 1
        if (!curr.left) {
          curr.left = newNode
          this.size++
          return
        }
        traverse(curr.left)
      }
      if (value === curr.value) {
        throw new Error(`${value} already exists in BST`)
      }
    }

    traverse(this.head)
    return newNode
  }

  // strategy for log n random selection:
  // get a random number n based on the size of the tree
  // find the nth largest number in the BST
  getRandom() {
    function findNthLargest(num, node) {
      if (num - node.leftChildrenCount === 0) {
        return node.value
      }

      if (num > node.leftChildrenCount) {
        return findNthLargest(num - node.leftChildrenCount, node.right)
      }

      if (num < node.leftChildrenCount) {
        return findNthLargest(num, node.left)
      }
    }

    const randomFactor = Math.ceil(Math.random() * this.size)
    return findNthLargest(randomFactor, this.head)
  }
}

const bst = new CustomBST(5)
bst.addNode(8)
bst.addNode(4)
bst.addNode(2)
bst.addNode(11)
bst.addNode(6)
bst.addNode(12)
bst.addNode(53)
bst.addNode(17)
bst.addNode(14)

const cache = { 5: 0, 8: 0, 4: 0, 2: 0, 11: 0, 6: 0, 12: 0, 53: 0, 17: 0, 14: 0 }

for (let i = 0; i < 100000; i++) {
  cache[bst.getRandom()]++
}

console.log('distribution across 100k calls:', cache)
