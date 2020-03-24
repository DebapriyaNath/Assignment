
/*Create a userObjectA object with properties name, email, 
  contact and assign value and deep copy to another userObjectB , with spread Operator.*/
let userObjectA = {
    name: "Saransh",
    email: "saranshkaran@yahoo.co.in",
    contact:"0987654321"
}
let userObjectB = {...userObjectA};

/*Compare userObjectA  and userObjectB is equal*/
console.log(userObjectB === userObjectA);

/*Add new property  address object to  userObjectA , and assign new properties with value country, city, zip */
userObjectA.address = {city: "",
    state: "",
    country: "",
    zip: ""
}
console.log("object A after adding address property:");
console.log(userObjectA);

/*Modify the  userObjectA address with new address using the spread operator*/
let address = {
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    zip: 700136
}
userObjectA.address = {...address};
console.log("object A after adding value to address property: ");
console.log(userObjectA);

/*Marge userObjectA and  userObjectB object to users array using the spread operator*/
console.log("-------------user object B-------------------");
console.log(userObjectB);
console.log("-------------user Array-------------------");
function mergeObjects(...userObjects){
    return [...userObjects];
}
let user = mergeObjects(userObjectA,userObjectB);
console.log(user);

/*Update  the users’ array of object  with new userObjectC using the spread operator*/
let objectUserC = {...userObjectB,...userObjectA};
console.log("After merging user with objectUserC: ")
user.push(mergeObjects(objectUserC));
console.log(user);

/*7.	 Create a parent class and assign some class properties with value, and create child class from the parent class,
 print the parent class properties value into child class     - using super*/

class Parent {
    constructor(value1, value2){
        console.log("Parent Constructor");
        this.value1 = value1;
        this.value2 = value2;
    }
    printValues(){
        console.log("Parent Class Values")
        console.log(`value1 = ${this.value1}`);
        console.log(`value2 = ${this.value2}`);
    }
}
class Child extends Parent{
    constructor(value1,value2,value3){
        super(value1,value2);
        console.log("Child class constructor");
        this.value3 = value3;
    }
    printValue(){
        super.printValues();
        console.log("child class value");
        console.log(`value3 = ${this.value3}`);
    }
}
let arr = [1,3,7];
let childObject = new Child(...arr);
childObject.printValues();

/*Create a product object with name, price, attribute, 
in attribute object assign another object with array of colors assign some value and also add size array,
 now using destructuring assign both colors and size into a separate  variable, and print*/
const Products = {
    name: "Router",
    price: 1000,
    attributes:{
        colors: ["While","Black","Green", "Red"],
        size: [12,100,21]
    }
}
let { name :productName, price : Price , attributes : {colors : productColors, size : productSize}} = Products;
console.log(productColors);
console.log(productSize);

