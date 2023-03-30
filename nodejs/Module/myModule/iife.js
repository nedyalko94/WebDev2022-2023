// module scope summary 
/*
Each loaded module in node js is wrapped with an IIFE that provides private scoping of code 
 IIFE allows you to repeat variable or function names without any conflicts




exports,require,module,__filename,__dirname

*/

(function(message){
    const superHero = 'Batman'
    console.log(superHero,message)
    //  module code actually live in here
     // no conflict between 2 function
})('hello');


(function(message){
    const superHero = 'Superman'
    console.log(superHero,message)
})('hey') ;