


/*
Check the intro 

*/

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0

    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value) //  declare node
        if (this.isEmpty()) { // check if is empty
            this.head = node // if is empty head is = to the node
        } else {
            node.next = this.head // if is not empty next is =  to the head 
            this.head = node //  head is = to the node 
        }
        this.size++
    }
    //Constant time complexity O(1)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = new node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    // linear O(n) but can be change to constant

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++

        }
    }

    removeIndex(index) {
        if (index < 0 || index >= this.size) {
            return "This index don't exist "
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next

            }
            removeNode = prev.next
            prev.next = removeNode.next

        }
        this.size--
        return removeNode.value

    }

    removeValue(value) {
        if (this.isEmpty()) return " List is empty"
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return ` ${value} has been removed`
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return `${value} has been found and remove`
            }
            return ` no node value has been found`
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return `List is Empty insert or append value`
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return `${value} has been found at index ${i}`
            }
            curr = curr.next
            i++
        }
        return `${value} has not be found`

    }

    reverse() {
        let prevPointer = null
        let currentPointer = this.head
        
        while (currentPointer) {
            let nextPointer = currentPointer.next
            currentPointer.next = prevPointer
            prevPointer = currentPointer
            currentPointer = nextPointer


        }
        this.head =  prevPointer
    }

    print() {
        if (this.isEmpty()) {
            return console.log('List is empty')
        }
        else {
            let current = this.head
            let listValue = ''
            while (current) {
                listValue += `${current.value} `
                current = current.next
            }
            console.log(listValue)
        }
    }
    // linear O(n)
}


const list = new LinkedList()

console.log(`list is empty ?`, list.isEmpty()) // check if is empty
console.log(`list size =`, list.getSize()) // check the size 
console.log(list.search()
)
list.print()
list.prepend(10)
list.print() //  loop and print 

list.prepend(20) // add in to front
list.prepend(30)
list.print()


list.append(5) // add value to the end of the LinkedList

list.print()

console.log(list.getSize())

list.insert(40, 0) // insert at specific place     value/ position
list.insert(15, 3)


list.print()


// remove with index
console.log(list.removeIndex(3))
console.log(list.removeIndex(4))
console.log(list.removeIndex(40))
// list.insert(20,3)
list.print()

console.log(list.removeValue(20)) // found and remove
console.log(list.removeValue(20)) // can't be found because don't exist


// search 
list.print()
console.log(list.search(10))


//reverse
list.print()
list.reverse()
list.print()





