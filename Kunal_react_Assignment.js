// 1. Create a userObjectA object with properties name, email, 
//    contact and assign value and deep copy to another userObjectB , with spread Operator.
console.log("Number 1......................................")
let userObjectA = new Object();
userObjectA.name = "Kunal Obj A"
userObjectA.email = "paloi@gmail.com"
userObjectA.contact = 7001354208

let userObjectB = {...userObjectA};

console.log(userObjectA);
console.log(userObjectB);

//3. Compare userObjectA  and userObjectB is equal
console.log("Number 3......................................")
console.log(userObjectA === userObjectB)

//4. Add new property  address object to  userObjectA , and assign new properties with value country, city, zip 
console.log("Number 4......................................")
userObjectA.address = 
    {
       country : "India",
       city : "Kolaghat",
       zip : 721134
    }
console.log(userObjectA);

//2. Modify the  userObjectA address with new address using the spread operator
console.log("Number 2......................................")
userObjectB.address =
    {
    country: "Nepal Obj B",
    city: "Kola",
    zip: 722212,
    state : "Kolkata",
    PS : "LalBazar"
     }
console.log(userObjectB);

userObjectA.address =
{
    ...userObjectB.address
}
console.log(userObjectA);

//5. Marge userObjectA and  userObjectB object to users array using the spread operator
console.log("Number 5......................................")
userObjectB.homeTown = "Behala"
userObjectB.profession = "Job"

let userArray = [{...userObjectA, ...userObjectB}];
console.log(userArray)

//6. Update  the users’ array of object  with new userObjectC using the spread operator
console.log("Number 6......................................")
let userObjectC = new Object();
userObjectC.name = "user Obj C"
userObjectC.email = "objc@gmail.com"
userObjectC.contact  = 1234567890

console.log(userObjectC)
userArray = [{...userObjectC}]
console.log(userArray)

//7.  Create a parent class and assign some class properties with value, and create child class from the parent class,
//     print the parent class properties value into child class     - using super
console.log("Number 7......................................")
class Parent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    value() {
        console.log("Parent class Values")
        console.log(`x = ${this.x}`);
        console.log(`y = ${this.y}`);
    }
}

class Child extends Parent {
    constructor(x, y, w) {
        super(x, y);
        this.w = w;
    }
    value() {
        super.value();
        console.log("child class value");
        console.log(`w = ${this.w}`);
    }
}
let data = [10, 20, 30];
let obj = new Child(...data);
obj.value();

//8.  Create a product object with name, price, attribute, in attribute object assign another object with array of 
//    colors assign some value and also add size array, now using destructuring assign both colors and size into 
//    a separate  variable, and print
console.log("Number 8......................................")

const product = {
    name: "Ukulele",
    price: 3000,
    attributes: {
        colors: ["Mehagani", "Black"],
        size: [17,24]
    }
}

let { 
    attributes: { colors: newColors, size: newSize } 
    } = product;
console.log(newColors);
console.log(newSize);