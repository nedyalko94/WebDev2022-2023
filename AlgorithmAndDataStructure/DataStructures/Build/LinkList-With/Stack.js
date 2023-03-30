

const LinkedList = require('./LinkListWithTail')

class LinkedListStack {

     constructor(){
        this.list = new LinkedList()

     }

     push(value){
        this.list.prepend(value)
     }
     pop(){
       return this.list.removeFromFront()
     }
     peak(){
        return this.list.head.value

     }
     isEmpty(){
        return this.list.isEmpty()
     }
     getSize(){
       return this.list.getSize()
     }
     print(){
        this.list.print()
     }
}

const stack = new LinkedListStack()

console.log(stack.isEmpty())

stack.push(10)
stack.push(20)
stack.push(30)

stack.print()

console.log(stack.getSize())

console.log(stack.pop())

console.log(stack.peak())

//  LIFO last in first out 