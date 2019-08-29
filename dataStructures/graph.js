class Graph {
  constructor() {
    this.adjList = new Map()
  }

  addVertex(v) {
    this.adjList.set(v, [])
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  print() {
    console.log('Graph')
    this.adjList.forEach((value, key) => {
      console.log(key, '->', value.join(', '));
    })
  }
}

module.exports = Graph

