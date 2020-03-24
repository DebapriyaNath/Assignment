
//1. Create a userObjectA object with properties name, email, contact and assign value and deep copy to another userObjectB , with spread Operator.

let userObjectA = {
    name: "Bishal",
    email: "a@gmail.com",
    contact:{ phone:"543647768"}
}
let userObjectB = {...userObjectA};

//3. Compare userObjectA  and userObjectB is equal

console.log(userObjectB === userObjectA);

//2 and 4

console.log(userObjectA);
let address = {
    city: "kolkata",
    state: "West Bengal",
    country: "India",
    zipcode: 700034
}
userObjectA.address = {...address};
console.log(userObjectA);

//5

console.log(userObjectB);
function mergeObject(...userObjects){
    return [...userObjects];
}
let user = mergeObject(userObjectA,userObjectB);
console.log(user);

//6

let objectUserC = {...userObjectB,...userObjectA};
console.log("After merging user object user c")
user.push(mergeObject(objectUserC));
console.log(user);

//7

class Parent {
    constructor(x,y){
        console.log("parent Constructor");
        this.x = x;
        this.y = y;
    }
    printValue(){
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
        console.log(`z = ${this.z}`);
    }
}
let data = [5,7,8];
let obj = new Child(...data);
obj.printValue();

//8

const Products = {
    name: "Bicycle",
    price: 500,
    attributes:{
        colors: ["Red","Black","Blue"],
        size: [3,5,9]
    }
}

let { name :Product_name, price : Price , attributes : {colors : PColors, size : PSize}} = Products;
console.log(PColors);
console.log(PSize);