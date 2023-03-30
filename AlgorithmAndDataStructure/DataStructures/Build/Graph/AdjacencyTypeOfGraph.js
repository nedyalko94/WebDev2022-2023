/*
Graph Representation
    Adjacency Matrix
        An adjacency matrix is a 2d array of size V x V is where V is the number of vertices
        in the graph
        Each row and column represent a vertex
        if the value of any element say , matrix[i][j] is 1 ,
         it represents that there is an edge connecting vertex i and vertex j 

            A   B   C
        A   0   1   0
        B   1   0   1
        C   0   1   0

                 B
                /\
               A  C

    Adjacency List
        Vertices are stored in a map like data structure , and every vertex stores a list of its adjacent vertices
            A->B
            B->A,C
            C -> B

            Pron AND Cons
    Adjacency Matrix vs Adjacency List

    With an adjacency list, we only need to store the values for the edges that exist.
    With adjacency matrix, you store values irrespective of whether an edge exists or not.
    Storage wise , an adjacency list is way more efficient

    With adjacency list , inserting and finding adjacent nodes is constant time complexity
    whereas with adjacency matrix , it is linear time complexity.

    An adjacency list allows you to store additional values with an edge such as weight of the edge.
    With adjacency matrix, such information would have to be stored externally.

*/

const matrix = [
    [0,1,0], //A
    [1,0,1], //B
    [0,1,0]  //C
]

const adjacencyList = {
    'A':['B'],
    'B':['A','C'],
    'C':['B']
}
console.log(matrix[0][1]) // return 1 since connection exist from A to B
console.log(matrix[1][2]) // return 1 since connection exist from B to C 
console.log(matrix[0][0]) // as A doesn't contain self loop

console.log(adjacencyList['A'])
console.log(adjacencyList['B'])
console.log(adjacencyList['C'])