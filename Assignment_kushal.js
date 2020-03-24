let userObjectA = {
    name: "kushal",
    email: "kushalbanik1994@gmail.com",
    contact:{
        phone:"123456789"}
}
let userObjectB = {...userObjectA};

/************************************* Exercise 1*******************************************************/

console.log(userObjectB === userObjectA);

/************************************* Exercise 3*******************************************************/

console.log("before adding address");
console.log(userObjectA);
let address = {
    city: "kolkata",
    state: "West Bengal",
    country: "India",
    zipcode: 700110
}
userObjectA.address = {...address};
console.log("-------------user object A-------------------");
console.log(userObjectA);

/************************************* Exercise 2 & 4*******************************************************/

console.log("-------------user object B-------------------");
console.log(userObjectB);
console.log("-------------user Array-------------------");
function mergeObject(...userObjects){
    return [...userObjects];
}
let user = mergeObject(userObjectA,userObjectB);
console.log(user);

/************************************* Exercise 5*******************************************************/

let objectUserC = {...userObjectB,...userObjectA};
console.log("After merging user object user c")
user.push(mergeObject(objectUserC));
console.log(user);

/************************************* Exercise 6*******************************************************/

class Parent {
    constructor(x,y){
        console.log("parent Constructor");
        this.x = x;
        this.y = y;
    }
    printValue(){
        console.log("Parent class Values")
        console.log(`x = ${this.x}`);
        console.log(`y = ${this.y}`);
    }
}
class Child extends Parent{
    constructor(x,y,z){
        super(x,y);
        console.log("Child class constructor");
        this.z = z;
    }
    printValue(){
        super.printValue();
        console.log("child class value");
        console.log(`z = ${this.z}`);
    }
}
let data = [5,6,7];
let obj = new Child(...data);
obj.printValue();

/************************************* Exercise 7*******************************************************/

const Products = {
    name: "Keyboard",
    price: 450,
    attributes:{
        colors: ["Red","Black","Blue"],
        size: [4,5,6]
    }
}

let { name :Product_name, price : Price , attributes : {colors : PColors, size : PSize}} = Products;
console.log(PColors);
console.log(PSize);