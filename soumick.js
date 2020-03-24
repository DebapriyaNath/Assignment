/************************************* Exercise 1*******************************************************/
let userObjectA = {
    name: "Soummick",
    email: "itssoumick@gmail.com",
    contact:{
        phone:"8981026174"}
}
let userObjectB = {...userObjectA};

/************************************* Exercise 3*******************************************************/

console.log(userObjectB === userObjectA);

/************************************* Exercise 2 & 4*******************************************************/


console.log("before adding address");
console.log(userObjectA);
let address = {
    state: "West Bengal",
    city: "Howrah",
    town: "Bally",
    country: "India",
    zipcode: 711227
}
userObjectA.address = {...address};
console.log(" !!!!!!!!! user object A !!!!!!!!!!!!!!");
console.log(userObjectA);

/************************************* Exercise 5*******************************************************/

console.log("!!!!!!!!!! user object B !!!!!!!!!");
console.log(userObjectB);
console.log("!!!!!!!!!! user Array !!!!!!!!!!!");
function mergeObject(...userObjects){
    return [...userObjects];
}
let user = mergeObject(userObjectA,userObjectB);
console.log(user);

/************************************* Exercise 6*******************************************************/

let objectUserC = {...userObjectB,...userObjectA};
console.log("user objectUserC post Merging")
user.push(mergeObject(objectUserC));
console.log(user);

/************************************* Exercise 7*******************************************************/


class Parent {
    constructor(p,s){
        console.log("parent Class Constructor");
        this.p = p;
        this.s = s;
    }
    displayValue(){
        console.log("Parent Class Data")
        console.log(`P = ${this.p}`);
        console.log(`S = ${this.s}`);
    }
}
class Child extends Parent{
    constructor(p,s,q){
        super(p,s);
        console.log("Child Class Constructor");
        this.q = q;
    }
    displayValue(){
        super.displayValue();
        console.log("Child Class Data");
        console.log(`Q = ${this.q}`);
    }
}
let value = [8,7,15];
let obj = new Child(...value);
obj.displayValue();

/************************************* Exercise 8*******************************************************/

const Products = {
    name: "POCO X2",
    price: 19999,
    attributes:{
        colors: [" Phoenix Red","Atlantis Blue","Matrix Purple"],
        RAM: [6,8],
        ROM:[64,128,256]
    }
}

let { name : Product_name, price : Price , attributes : {colors : PColors, RAM : PRAM, ROM : PROM}} = Products;
console.log(PColors);
console.log(PRAM);
console.log(PROM);
/************************************* END *******************************************************/