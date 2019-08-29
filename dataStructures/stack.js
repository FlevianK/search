class Stack {
  constructor(){
    this.items = []
  }

  push (element) {
    this.items.push(element)
  }

  pop () {
    if (this.isEmpty()) {
      return 'stack is empty'
    }
    return this.items.pop()
  }

  peek() {
    console.log()
    if(this.isEmpty()) return 'Stack is Empty'
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  print () {
    console.log('Stack')
    let str = ''
    this.items.map(element => str += element)
    console.log(str)
  }
}

module.exports = Stack

