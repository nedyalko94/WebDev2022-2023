

class SuperHero{
    constructor(name){
        this.name = name
    }
    getName(){
       return this.name 
    }

    setName(name){
        this.name = name
    }
}


// module.exports =  new SuperHero('batman') 

/*
cashing the module  is when you import 2 time the same module with require 
the second import will refer to the first because is already cash 

thats why we export directly the class 


*/
module.exports = SuperHero