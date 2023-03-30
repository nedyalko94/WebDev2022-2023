/*
The size of the queue is fixed and a single block of memory is used as if the first element 
is connected of the last element.

Also referred to as circular  buffer or rin buffer and follows the 

FIFO principle 
a circular queue will reuse the empty block created during the  dequeue operation 

When working with queues  of fixed maximum size, a circular queue is a great implementation choice 

The circular queue data structure support two main operations 

    enqueue which add an element to the rear/tail of the collection 
    dequeue which remove an element from the front / head of the collection


    Usage 
        Clock
        Steaming data
        Traffic lights
    

        implementation

        enqueue - add an element from the queue
        dequeue - remove the oldest element from the queue
        isFull - check if the queue is full
        isEmpty - check if the queue is empty
        peek - et the value of the element at the front of the queue without removing it 
        size - get the number of element in the queue 
        print - visualize the elements in the queue 


*/

class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = -1;
        this.front = -1 ; 

    }
    isFull(){
        return this.currentLength === this.capacity
    }
    isEmpty(){
        return this.currentLength === 0 
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1  ) % this.capacity
            this.items[this.rear] = element
            this.currentLength += 1 
            if(this.front === -1){
                this.front = this.rear
            }
        }

    }

    dequeue(){
        if(this.isEmpty()) return null
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front+1)% this.capacity
        this.currentLength -= 1
        if(this.isEmpty()){
            this.front = -1 
            this.rear = -1

        }
        return item

    }

    peek(){
        if (!this.isEmpty()) return this.items[this.front]
        else return null
        

    }

    print(){
        if(this.isEmpty()) console.log("Queue is empty")
        else{
            let i  
            let string = ''
            for( i = this.front; i !== this.rear; i = (i+1)% this.capacity){
                string+= this.items[i] +" "
            }
            string+= this.items[i]
            console.log(string)
        }

    }
}


const queue  = new CircularQueue(5)

console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

queue.print()

queue.enqueue(60) // can't be add more than 5 

queue.print()


console.log(queue.dequeue())


queue.print()
console.log(queue.peek())
 
console.log(queue.isFull())
