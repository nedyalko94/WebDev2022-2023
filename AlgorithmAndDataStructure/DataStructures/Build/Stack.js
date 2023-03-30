/*
Stack

The stack data structure is a sequential collection of elements that follows the principle of 

Last In First Out (LIFO)

The last element inserted into the stack is first element to be removed.
A stack of Plates.The last plate placed on top of the stack is also the first plate removed from the stack.

Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.

The Stack data structure supports two main operations  
    push which adds an element to the collection 
    pop which removes the most recently added element from the collection


Usage
    Browser history tracking.
    Undo operation when typing.
    Expression conversions.
    Call stack in JavaScript runtime.


    Stack implementation

    push() - add element to the top of the stack
    pop() - remove the top most recently added element from the stack
    peek() - get the value of the top element without removing it 
    isEmpty() - check if the stack is empty
    size() - get the number of elements in the stack 
    print()- visualize the elements in the stack 

*/

class Stack {
    constructor(){
        this.items = []

    }
    push(element){
        this.items.push(element)
    }

    pop(){
      return  this.items.pop()
    }

    peak(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    print(){
        return console.log(this.items.toString())
    }
}


const myStack = new Stack()

// console.log(myStack)
console.log(myStack.isEmpty())
myStack.push(10)
myStack.push(20)
myStack.push(30)

console.log(myStack.size())
console.log(myStack.peak())
myStack.pop()
console.log(myStack.peak())
myStack.print()

