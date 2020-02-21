const BinarySearchTree = require('./BinarySearchTree')

let bst
beforeEach(() => {
  bst = new BinarySearchTree(5)
  bst.addNode(8)
  bst.addNode(4)
  bst.addNode(2)
  bst.addNode(11)
  bst.addNode(6)
  bst.addNode(12)
  bst.addNode(53)
  bst.addNode(17)
  bst.addNode(14)
})

test('size should be correct', () => {
  expect(bst.size).toBe(10)
})

test('preorder traversal', () => {
  const preorder = []
  function preorderTraverse(node) {
    preorder.push(node.value)
    if (node.left) preorderTraverse(node.left)
    if (node.right) preorderTraverse(node.right)
  }
  preorderTraverse(bst.head)
  console.log(bst.head.right.value)
  expect(JSON.stringify(preorder)).toBe(JSON.stringify([5, 4, 2, 8, 6, 11, 12, 53, 17, 14]))
})

test('inorder traversal', () => {
  const inorder = []
  function inorderTraverse(node) {
    if (node.left) inorderTraverse(node.left)
    inorder.push(node.value)
    if (node.right) inorderTraverse(node.right)
  }
  inorderTraverse(bst.head)
  console.log(bst.head.right.value)
  expect(JSON.stringify(inorder)).toBe(JSON.stringify([2, 4, 5, 6, 8, 11, 12, 14, 17, 53]))
})

test('postOrder traversal', () => {
  const postOrder = []
  function postOrderTraverse(node) {
    if (node.left) postOrderTraverse(node.left)
    if (node.right) postOrderTraverse(node.right)
    postOrder.push(node.value)
  }
  postOrderTraverse(bst.head)
  console.log(bst.head.right.value)
  expect(JSON.stringify(postOrder)).toBe(JSON.stringify([2, 4, 6, 14, 17, 53, 12, 11, 8, 5]))
})
