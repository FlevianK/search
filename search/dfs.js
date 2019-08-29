const Graph = require('../dataStructures/graph');
const Stack = require('../dataStructures/stack');

class DFS extends Graph{
  search (startNode) {
    const visited = [],
      stack = new Stack(),
      traversal = []

      visited.push(startNode)
      stack.push(startNode)
      

      for (let w of this.adjList) {
        while (!stack.isEmpty()) {
          const stackTopElement = stack.pop()
          traversal.push(stackTopElement)

          const neighbours = this.adjList.get(stackTopElement)
          neighbours && neighbours.map(vertex => {
            if (!visited.includes(vertex)){
              visited.push(vertex)
              stack.push(vertex)
            }

          })
          
        }
      }

    return traversal
  }
}

module.exports = DFS;