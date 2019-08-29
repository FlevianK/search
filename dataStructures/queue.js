class Queue {
  constructor () {
    this.items = []
  }

  enqueue (element) {
    this.items.push(element)
  }

  dequeue () {
    if(this.isEmpty()) {
      return "Queue is empty"
    }
    return this.items.shift()
  }

  front () {
    if(this.isEmpty()) {
      return "Queue is empty"
    }
    return this.items[0]
  }

  isEmpty () {
    this.items.length === 0
  }

  print () {
    console.log('Queue')
    let str = ''
    this.items.map(element => str += element)
    console.log(str)
  }

}

module.exports = Queue