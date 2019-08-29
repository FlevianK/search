const Graph = require('../dataStructures/graph');
const Queue = require('../dataStructures/queue');

class BFS extends Graph {
  search(sourceNode) {
    const visited = [];
    const queue = new Queue();
    const traversal =[];
  
    visited.push(sourceNode);
    queue.enqueue(sourceNode);
  
    for (let item of this.adjList) {
      while (!queue.isEmpty()) {
        // get the element from the queue
        const getQueueElement = queue.dequeue();
        traversal.push(getQueueElement);
        // get the adjacent list for current vertex
        const get_List = this.adjList.get(getQueueElement);
        
        get_List && get_List.map(vertice => {
          if (!visited.includes(vertice)) {
            queue.enqueue(vertice);
            visited.push(vertice);
          }
          
        })
        
      }
    }

    return traversal
  }
}

module.exports = BFS;