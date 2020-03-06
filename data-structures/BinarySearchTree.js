class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    // nodes child count, including itself, only relevant in the challenges/getRandomFromBST problem
    this.rightChildrenCount = 1
    this.leftChildrenCount = 1
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

  // runs a check to determine if the binary tree is a _valid_ binary search tree
  isValidBST() {
    // if the output of an inorder traversal is not sorted, then this is not a valid BST
    let prevValue = Number.NEGATIVE_INFINITY
    let isValid = true

    function traverse(node) {
      if (!isValid) return
      if (node.left) {
        traverse(node.left)
      }
      if (node.value < prevValue) {
        isValid = false
      }
      prevValue = node.value
      if (node.right) {
        traverse(node.right)
      }
    }

    traverse(this.head)
    return isValid
  }
}

module.exports = BinarySearchTree
