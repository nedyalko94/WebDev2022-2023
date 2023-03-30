/*
Worker Threads Module

    The worker_thread module enables the use of threads that execute JS in 
    parallel

    Code executed in a worker thread runs in a separate chill process,
     preventing it from blocking you main app

    The Cluster module can be used to run multiple instances of Node.js that can distribute workloads

    worker_threads module allows running multiple app threads within a single Node.js instance

    When process isolation is not needed , that is , no separate instances of V8 , event loop and memory are needed , you should use worker_threads



*/