'use strict'
let SIZE_SMALL = {
    cost: 50,
    kkal: 20,
}
let SIZE_MIDDLE = {
    cost: 75,
    kkal: 30,
}
let SIZE_BIG = {
    cost: 100,
    kkal: 40,
}
let TOPPING_MAYO = {
    cost: 20,
    kkal: 5,
}
let TOPPING_POTATO = {
    cost: 15,
    kkal: 10,
}
let TOPPING_CHEESE = {
    cost: 10,
    kkal: 20,
}
let TOPPING_SALAD = {
    cost: 20,
    kkal: 5,
}
let TOPPING_SEASONING = {
    cost: 15,
    kkal: 0,
}
let NO_TOPPING = {
    cost: 0,
    kkal: 0,
}
function Hamburger(size){
    this.size = size;
    this.topping = NO_TOPPING;
}
Hamburger.prototype.addTopping = function(topping){
    this.topping.cost += topping.cost;
    this.topping.kkal += topping.kkal;
}
Hamburger.prototype.getPrice = function(){
    return this.size.cost + this.topping.cost;
}
Hamburger.prototype.getCallories = function(){
    return this.size.kkal + this.topping.kkal;
}


const hamburger = new Hamburger(SIZE_BIG);
hamburger.addTopping(TOPPING_CHEESE);
hamburger.addTopping(TOPPING_POTATO);
hamburger.addTopping(TOPPING_SALAD);


console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());