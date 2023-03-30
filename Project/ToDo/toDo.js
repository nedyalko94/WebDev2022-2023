function toDo(name,cook, clean, wash) {
    this.name=name
    this.cook = cook;
    this.clean = clean;
    this.wash = wash;
    this.extaWork = []
} // show the info in console log
toDo.prototype.showInfo = function () {
    console.log(`${this.name} make ${this.cook} and if you have a time clean the ${this.clean} , and don't forget to${this.extaWork}`)
}
// update the info 
toDo.prototype.updateCook=function(newMeal){
    return this.cook =newMeal;
}
// add new information in array extra work
toDo.prototype.Work=function(work){
    this.extaWork.push(work)
}
// delete 
toDo.prototype.deleteExtraWork=function(){
    this.extaWork.pop()
}

// object constructor  with info 
let Father = new toDo( "Father",'Musaka','Bathrom','Dishes');
let myBrother = new toDo("brother",'Dessert','your Room','myCar');
let myBoss = new toDo("Boss",'Dessert','your Room','myCar');

Father.Work(" take the bread from the store")
Father.updateCook("Fries")
Father.showInfo();
myBrother.Work(" bring me back my car")
myBrother.showInfo()
myBoss.Work(" pay for my work")
myBoss.showInfo()




// go rails
// https://education.github.com/pack