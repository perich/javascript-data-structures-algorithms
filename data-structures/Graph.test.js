const Graph = require('./Graph')

let graph, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11
beforeEach(() => {
  graph = new Graph(1)

  node1 = graph.head
  node2 = graph.addNode(2, [node1])
  node3 = graph.addNode(3, [node2, node1])
  node4 = graph.addNode(4, [node3])
  node5 = graph.addNode(5, [node4])
  node6 = graph.addNode(6, [node5, node2])
  node7 = graph.addNode(7, [node3])
  node8 = graph.addNode(8, [node2])
  node9 = graph.addNode(9, [node7])
  node10 = graph.addNode(10, [node9])
  node11 = graph.addNode(11, [node10])
})

test('getSize() should return the correct size', () => {
  expect(graph.getSize()).toBe(11)
})

test('getIsCyclic() should return correctly for cyclic/acyclic graph', () => {
  expect(graph.getIsCyclic()).toBe(true)
  graph = new Graph(1)
  node1 = graph.head
  node2 = graph.addNode(2, [node1])
  node3 = graph.addNode(3, [node2])
  node4 = graph.addNode(4, [node3])
  node5 = graph.addNode(5, [node3])
  expect(graph.getIsCyclic()).toBe(false)
})

test('getMinDistanceBetweenTwoNodes()', () => {
  expect(graph.getMinDistanceBetweenTwoNodes(node1, node7)).toBe(2)
  expect(graph.getMinDistanceBetweenTwoNodes(node1, node11)).toBe(5)
  expect(graph.getMinDistanceBetweenTwoNodes(node3, node7)).toBe(1)
  expect(graph.getMinDistanceBetweenTwoNodes(node3, node9)).toBe(2)
})
