const assert = require('assert').strict;

// Data Structures
const Graph = require('./dataStructures/graph')
const Stack = require('./dataStructures/stack')
const Queue = require('./dataStructures/queue')
const HashTable = require('./dataStructures/hashTable')

// Search
const DFS = require('./search/dfs');
const BFS = require('./search/bfs');
const linearSearch = require('./search/linearSearch')
const binarySearch = require('./search/binarySearch')

const vertices = ['A', 'B', 'C', 'D', 'E'];

// const graph = new DFS()
const graph = new BFS()
// const graph = new Graph()
const stack = new Stack()
const queue = new Queue()


for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i])
  stack.push(vertices[i])
  queue.enqueue(vertices[i])
}

// adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');

graph.print()
stack.print()
queue.print()

const ransom = (magazine, note) => {
  const magazineArray = magazine.split(' ');
  const noteArray = note.split(' ');

  const table = new HashTable();

  magazineArray.map(key => {
    table.set(key, key)
  })

  for(let i=0; i<noteArray.length; i++) {
    if(table.get(noteArray[i]) === false) {
      return 'No'
    }
  }
  return 'Yes'
}
assert.deepEqual(ransom('give me 1000 dollars',
'give me 1000'), 'Yes')

assert.deepEqual(ransom('give me 1000 dollars',
'give me 100'), 'No')


// Binary Search
assert.deepEqual(binarySearch([1, 3, 5, 7],
5), 'Found')
assert.deepEqual(binarySearch([1, 3, 5, 7],
9), 'Not found')

//Linear Search
assert.deepEqual(linearSearch([1, 3, 5, 7],
5), 'Found')
assert.deepEqual(linearSearch([1, 3, 5, 7],
9), 'Not found')

// Depth First Search
assert.deepEqual(graph.search('B'), ['B', 'D', 'E', 'C', 'A']);

// Breadth First Search
assert.deepEqual(graph.search('B'), ['B', 'A', 'C', 'D', 'E']);

console.log('Done!')