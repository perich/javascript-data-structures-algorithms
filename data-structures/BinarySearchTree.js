class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(value) {
    if (!value) throw new Error('must pass value for initial head node')
    this.size = 1
    this.head = new Node(value)
  }

  addNode(value) {
    const newNode = new Node(value)

    const traverse = curr => {
      if (value > curr.value) {
        if (!curr.right) {
          curr.right = newNode
          this.size++
          return
        }
        traverse(curr.right)
      }
      if (value < curr.value) {
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
}

module.exports = BinarySearchTree
