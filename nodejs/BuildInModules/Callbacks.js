/*
Callbacks 
in js , function are first class objects 
A function can be passed as an argument to a function
A function can also be returned as values from other function

Synchronous callback 
    function/callback that is execute immediately is called a synchronous callback

Asynchronous callbacks
    A callback that is often used to continue or resume code execution after an asynchronous operation has completed
    Callbacks are used to delay the execution of a function until a particular time or event has occurred

    In node.js have an async nature to prevent blocking of execution 
    Ex: reading data from a file , fetching data from a DB or handling a network request

    

*/


function greet(name){
    console.log(`hello ${name}`)
}

function higherOrderFunction(callback) {// higher order function
    const name = 'Ned'
    callback(name) // callback function
    
}

higherOrderFunction(greet)