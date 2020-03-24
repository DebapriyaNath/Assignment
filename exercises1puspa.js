//Creating object userObjectA and copying to another object userObjectB
/* const userObjectA = ['name', 'email', 'contact'];
console.log(userObjectA)

const userObjectB = ["hi", ...userObjectA];
console.log(userObjectB) */

let userObjectA = {
    name : "puspa",
    email : "puspa7305@gmail.com",
    contact: 454545454,
    address: "8, H.M.C road"
};

let userObjectB = {...userObjectA};
console.log("Value of userObjectB: ")
console.log(userObjectB)



//Modify the  userObjectA address with new address using the spread operator
userObjectA = {
    ...userObjectA,
    address: "89, MG Road"
};
console.log("Value of userObjectA after modifying address property: ")
console.log(userObjectA)



//Compare userObjectA  and userObjectB is equal
console.log("Compairing userObjectA with userObjectB: ")
console.log(JSON.stringify(userObjectA) === JSON.stringify(userObjectB))
9+



//Add new property  address object to  userObjectA , and assign new properties with value country, city, zip 
let address = {
    country: "India",
    city: "Kolkata",
    zip: 700046
};

userObjectA = {
    ...userObjectA,
    ...address
}
console.log("Value of userObjectA after adding address object: ")
console.log(userObjectA)


//Marge userObjectA and  userObjectB object to users array using the spread operator
const merge = (...objects) => ({...objects});
let user = merge(userObjectA, userObjectB);
console.log("Value of user array:")
console.log(user)


//Update  the users’ array of object  with new userObjectC using the spread operator
let userObjectC = {
    name : "saransh",
    email : "saransh@gmail.com",
    contact: 434424545454,
    address: "8, saltlake"
};
user = merge(userObjectA, userObjectB, userObjectC);
console.log("Value of user array after adding userObjectC:")
console.log(user)

/*7. Create a parent class and assign some class properties 
with value, and create child class from the parent class,
 print the parent class properties value into child class- using super */

class Parent {
    constructor(x,y){
        console.log("With in Parent");
        this.x = x;
        this.y = y;
    }
    printValue(){
        console.log("Parent class ")
        console.log(`x = ${this.x}`);
        console.log(`y = ${this.y}`);
    }
}
class Child extends Parent{
    constructor(x,y,z){
        super(x,y);
        console.log("with in child");
        this.z = z;
    }
    printValue(){
        super.printValue();
        console.log("child class");
        console.log(`z = ${this.z}`);
    }
}
let value = [5,6,7];
let obj = new Child(...value);
obj.printValue();

/*Create a product object with name, price, 
attribute,in attribute object assign another object
 with array of colors assign some value and also add size*/

const Products = {
    name: "Tshirt",
    price: 300,
    attributes:{
        colors: ["pink","Black","white"],
        size: ["s","xl","xxl"]
    }
}

let { name :Product_name, price : Price , attributes : {colors : PColors, size : PSize}} = Products;
console.log(PColors);
console.log(PSize);