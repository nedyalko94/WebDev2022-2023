

class Queue{


    constructor(){
        this.items = {}
        this.rear = 0 
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear ++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.rear - this.front === 0 
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log( this.items)
    }

}

const objQueue = new Queue()

console.log(objQueue.isEmpty())

objQueue.enqueue(10)
objQueue.enqueue(20)
objQueue.enqueue(30)

console.log(objQueue.size())

objQueue.print()

console.log(objQueue.dequeue())

console.log(objQueue.peek())


// big-O  is O(1) constant time complexity
