
/* Event Loop
it is a C program and is part of libuv

A design pattern that orchestrates or co-ordinates the execution of synchronous
and async code in Node

simply decide which code to execute first and what is with priority

    Event Loop -Execution order
        User written sync js code takes priority ove async code that the 
        runtime would like to execute

        Only after the call stack is empty, the event loop comes into picture

        1 Any callback in the micro task queues are execute.
         First ,tasks in the nextTick queue and only then tasks in the promise queue

        2 All callback within the timer queue are execute

        3 Callbacks in the micro task queue if present are executes . Again ,first task in the nextTick
        queue and than tasks in the promise queue

        4 All callback within the I/O queue are execute

        5 Callbacks in the micro Task queues if present are executes . nextTick queue followed by Promise queue

        6 All callbacks in the check queue are executed
        
        7 Callbacks in the micro task queue if present are executed.Again, first tasks in the nextTick
        queue and then tasks in the promise queue

        8 All callbacks in the close queue are executed

        9 For one final time in the same loop, the micro task queues are executed. nextTick queue
        followed by promise queue.

*/


console.log("first")
console.log("second")
console.log("third")