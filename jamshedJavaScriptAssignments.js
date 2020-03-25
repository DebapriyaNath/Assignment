//1.assigning values to userObjectA

let userObjectA = {
  name: "John",
  email: "john.123@gmail.com",
  contact: "9132897665"
};

let userObjectB = { ...userObjectA };
console.log(userObjectA);
console.log(userObjectB);

//2.Add new property  address object to  userObjectA , and assign new properties with value country, city, zip

userObjectA.address = {
  country: "India",
  city: "Kolkata",
  zip: "700102"
};
console.log(userObjectA);

//3.Modify the  userObjectA address with new address using the spread operator

userObjectA = {
  ...userObjectA,
  address: { country: "Turkey", city: "Istanbul", zip: "123456" }
};
console.log(userObjectA);

//4.Compare userObjectA  and userObjectB is equal
console.log(userObjectA === userObjectB);

//5.Merge userObjectA and  userObjectB object to users array using the spread operator

let userObjectA = {
  name: "John",
  email: "john.123@gmail.com",
  contact: "9132897665"
};

let userObjectB = { ...userObjectA };
let users = [];
users.push({ ...userObjectA });
users.push({ ...userObjectB });
console.log(users);

//6.Update  the user's array of object  with new userObjectC using the spread operator

let userObjectA = {
  name: "John",
  email: "john.123@gmail.com",
  contact: "9132897665",
  address: {
    city: "kolkata"
  }
};

userObjectA = { ...userObjectA, address: { city: "Delhi" } };
console.log(userObjectA);

//7. Create a parent class and assign some class properties with value, and create child class from the parent class,
// print the parent class properties value into child class - using super

class Base {
  constructor(empId, empName, empAge) {
    this.empId = empId;
    this.empName = empName;
    this.empAge = empAge;
  }

  displayBase() {
    console.log("\nBase Class Information");
    console.log(`Empid => ${this.empId}`);
    console.log(`Name => ${this.empName}`);
    console.log(`Age => ${this.empAge}`);
  }
}

class Child extends Base {
  constructor(empId, empName, empAge, empDepart, empDesig) {
    super(empId, empName, empAge);
    this.empDepart = empDepart;
    this.empDesig = empDesig;
  }

  displayChild() {
    console.log("Child Class Information");
    console.log(`Empid => ${this.empId}`);
    console.log(`Name => ${this.empName}`);
    console.log(`Age => ${this.empAge}`);
    console.log(`EmpDepartment => ${this.empDepart}`);
    console.log(`EmpDesignation => ${this.empDesig}`);
  }
}
//Creating base class object

let obj = new Child("emp101", "John", 25, "React", "Developer");
obj.displayChild();

//8.Create a product object with name, price, attribute, in attribute object assign another object with array of
//colors assign some value and also add size array, now using destructuring assign both colors and size into a separate  variable, and print

let Product = {
  name: "Box Tape",
  price: "1234",
  attribute: {
    color: ["ash", "green", "pink"],
    size: ["2-inch", "3-inch"]
  }
};

const {
  attribute: { color: rang, size: sz }
} = Product;
console.log(x);
console.log(y);
