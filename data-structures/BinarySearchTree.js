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
    const inorder = []

    function traverse(node) {
      if (node.left) {
        traverse(node.left)
      }
      inorder.push(node.value)
      if (node.right) {
        traverse(node.right)
      }
    }

    function isSorted(arr) {
      let curr = arr[0]

      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < curr) return false
        curr = arr[i]
      }
      return true
    }

    traverse(this.head)
    console.log(inorder)
    return isSorted(inorder)
  }
}

module.exports = BinarySearchTree
