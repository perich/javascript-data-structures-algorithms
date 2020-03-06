// given two identical (but not equal) DOM trees A and B
// and given a node in tree A, return the corresponding node from tree B

function findMatchingNode(treeA, treeB, searchNode) {
  // first do a DFS on treeA, keeping track of the path until we find node
  function findNodePath() {
    let nodePath = null

    function traverse(currNode, path) {
      if (nodePath !== null) return
      if (currNode === searchNode) {
        nodePath = path
        return
      }

      if (currNode.children && currNode.children.length > 0) {
        for (let i = 0; i < currNode.children.length; i++) {
          traverse(currNode.children[i], [...path, i])
        }
      }
    }

    traverse(treeA.root, [])
    if (nodePath === null) {
      throw new Error('searchNode does not exist in treeA')
    }
    return nodePath
  }

  const nodePath = findNodePath()

  // now that we have the path to the node, simply follow that path in treeB
  let location = treeB.root
  for (let i = 0; i < nodePath.length; i++) {
    const childIndex = nodePath[i]
    location = location.children[childIndex]
  }

  return location
}

class Node {
  constructor(value) {
    this.value = value
    this.children = []
  }
}
class MockDOM {
  constructor() {
    this.root = new Node('html')
  }
}

const mockA = new MockDOM()
mockA.root.children.push(new Node('head'), new Node('body'))
mockA.root.children[0].children.push(new Node('link'), new Node('link'), new Node('link'), new Node('link'))
mockA.root.children[1].children.push(new Node('p'), new Node('div'), new Node('div'))
const targetNode = new Node('h1')
mockA.root.children[1].children[1].children.push(targetNode)

const mockB = new MockDOM()
mockB.root.children.push(new Node('head'), new Node('body'))
mockB.root.children[0].children.push(new Node('link'), new Node('link'), new Node('link'), new Node('link'))
mockB.root.children[1].children.push(new Node('p'), new Node('div'), new Node('div'))
mockB.root.children[1].children[1].children.push(new Node('h1'))

console.log(findMatchingNode(mockA, mockB, targetNode))
