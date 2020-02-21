class Node {
  constructor(value) {
    this.value = value
    this.edges = []
  }
}

class Graph {
  constructor(value) {
    if (!value) throw new Error('must provide a value for the first node in the graph')
    this.head = new Node(value)
  }

  // returns count of all nodes
  getSize() {
    let count = 0
    const queue = [this.head]
    const seenNodes = new Set()

    function searchEdges() {
      const node = queue.shift()
      if (seenNodes.has(node)) return

      seenNodes.add(node)
      count++

      node.edges.forEach(nextNode => {
        queue.push(nextNode)
      })
    }
    while (queue.length) {
      searchEdges()
    }
    return count
  }

  // get the minimum number of edges between two nodes in the graph
  getMinDistanceBetweenTwoNodes(nodeA, nodeB) {
    const queue = [nodeA]
    const distMap = new Map()
    distMap.set(nodeA, 0)

    function searchEdges() {
      const current = queue.shift()

      current.edges.forEach(nextNode => {
        if (distMap.has(nextNode)) return
        distMap.set(nextNode, distMap.get(current) + 1)
        queue.push(nextNode)
      })
    }

    while (queue.length && !distMap.has(nodeB)) {
      searchEdges()
    }
    return distMap.get(nodeB)
  }

  // adds a new node to the graph, with edges connected to nodes passed as siblings
  addNode(value, siblings) {
    const newNode = new Node(value)
    siblings.forEach(node => {
      node.edges.push(newNode)
    })
    return newNode
  }

  // returns a boolean indiciating whether or not the graph is cyclic
  getIsCyclic() {
    let isCyclic = false
    const queue = [this.head]
    const seenNodes = new Set()

    function searchEdges() {
      const node = queue.shift()
      if (seenNodes.has(node)) {
        isCyclic = true
      }
      seenNodes.add(node)

      node.edges.forEach(nextNode => {
        queue.push(nextNode)
      })
    }
    while (queue.length && !isCyclic) {
      searchEdges()
    }
    return isCyclic
  }
}

module.exports = Graph
