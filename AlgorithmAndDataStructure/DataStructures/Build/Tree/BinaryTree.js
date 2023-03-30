/*Binary Tree

A binary tree is a tree data structure in which each node has at most two children
They are referred to as left child and right child



Binary search tree (BST)

The value of each left node must be smaller that the parent node

The value of each right node must be greater than the parent node

Each node has at most 2 children


example 
             10
             /\
            5 15
           /\
          3  7

(BST) Binary search tree Operation

    insertion -To add a node to the tree
    Search - to find a node given its value
    DFS & BFS -To visit all nodes in the tree      
        1.DFS - Depth first Search
        2.BFS - Breadth First Search
    Deletion - To remove a node give its value

Usage 
  Searching 
  Sorting
  To implement abstract data types such a lookup tables and priority queues


*/
class Node{
    constructor(value){
        this.value= value
        this.left= null
        this.right = null

    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }


    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
       

    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }
        // handle left side situation and use recursion
        else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        } 
        // handle right side and use recursion   
    }
    Search(root,value){
        if(!root) {
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value<root.value){
                return this.Search(root.left,value)
            }else{
                return this.Search(root.right,value)
            }
        }
    }
/* 
Tree Traversal - means visiting every node in the tree 
A hierarchical data structure like a tree can be traversed in different ways
    1.DFS - Depth first Search
        PreOrder - read the data of the node -> visit the left subtree -> visit the right subtree
                10
                5 15
            3 -7
                will return 10 ,5 ,3,7,15
        InOrder -visit the left subtree-> read the data of the node->visit the right subtree 
        PostOrder-visit the left subtree -> visit the right subtree ->read the data of the node

    2.BFS - Breadth First Search
        Explore all nodes at the present depth prior to moving on to nodes at the next depth level
        10,5,15 3,7
            approach
                    1.Create a queue
                    2.Enqueue the root node 
                    3.As long as a node exist in the queue
                        3.1 Dequeue the node from the front
                        3.2 Read the node's value
                        3.4 Enqueue the node's left child if it exist 
                        3.5 Enqueue the node's right child if it exist 



*/


//DFS
preOrder(root){
    if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }

}
inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }
}
postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
}
//BFS
levelOrder(){
    // use the optimized queue implementation array is not the best 
    const queue = []
    queue.push(this.root)
    while(queue.length){
        let curr = queue.shift()
        console.log(curr.value)
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }

}

// min / max with recursion
min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
}
max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
}

/*  Scenario
Remove node - no child
Remove node - one child
Remove node - 2 child 
*/

delete(value){
    this.root = this.deleteNode(this.root,value)

}

deleteNode(root,value){
    if(root === null){
        return root
    }
    if(value<root.value){
        root.left = this.deleteNode(root.left,value)
    }else if( value>root.value ){
        root.right = this.deleteNode(root.right,value)
    }else{
        // handle the 3 Scenario
        if(!root.left && !root.right){
            return null
            // no child
        }
        if(!root.left){
            return root.right
            // one child right
        }else if(!root.right){
            return root.left
            // one child left
        }
        // when have 2 child  we get min right  child with recursion
        root.value = this.min(root.right)
        root.right = this.deleteNode(root.right,root.value)

    }
    return root
}



}

const bst = new BinarySearchTree()

// console.log('is empty?',bst.isEmpty()) // true

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.levelOrder()
console.log("before deletion")
bst.delete(10)
bst.levelOrder()

// bst.insert(7)

// console.log(bst.Search(bst.root,10)) // true
// console.log(bst.Search(bst.root,5))  // true
// console.log(bst.Search(bst.root,15)) // true
// console.log(bst.Search(bst.root,20)) // true

// bst.preOrder(bst.root)   // 10,5,3,7,15
// bst.inOrder(bst.root)   // 3,7,5,10,15
// bst.postOrder(bst.root) // 3,7,5,15,10 
// bst.levelOrder()        // 10,5,15,3,7

// console.log(bst.min(bst.root))//3 
// console.log(bst.max(bst.root))//15
