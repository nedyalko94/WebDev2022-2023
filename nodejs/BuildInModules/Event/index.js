const EventEmitter = require("node:events")
// it's a class and node module 

/*
the events module allows us to work with events in Node

An event is a action or an occurrence that has happened  in our application that we can respond to 

Using the events module, we can dispatch our own custom events and respond to those custom events in a non -blocking manner

*/


const emitter = new EventEmitter()



emitter.on('order-pizza',(size,topping)=>{
    console.log(`Order receive!Baking a ${size} pizza  with ${topping}`)  

})

emitter.on('order-pizza',(size)=>{
if(size ==='Large'){
    console.log('Serving with free drink.')
}else{
    console.log('No free drink.')
}
}) 



emitter.emit('order-pizza','Large','Mushrooms') // dispatching 

 
      
// ---------------------Build Module with Event build in module--------------------------------------

const PizzaShop = require('./pizzaShop')
const DrinkMachine = require('./drinkMachine')

const drinkMachine = new DrinkMachine()
const pizzaShop = new PizzaShop()

pizzaShop.on('order',(size,topping)=>{    
  console.log(`Order from shop receive!Baking a ${size} pizza  with ${topping}.`)   
    drinkMachine.serveDrink(size)
})   

pizzaShop.order('Large','Cheese')     
pizzaShop.displayOrderNumber()    
 
