/**1. Create a userObjectA object with properties name, email, contact and assign value and deep copy to 
 * another userObjectB , with spread Operator. */

 const userObjectA = {
     "name" : "Marvel",
     "email" : "marvel@email.com",
     "contact" : "123456789"
 };

 console.log("Output 1: \n",userObjectA);

 const userObjectB = {...userObjectA};

 console.log("Output 2: \n",userObjectB);
/****************************************************************************************************************/

 /**2. Modify the  userObjectA address with new address using the spread operator */

 const newuserObjectA = {...userObjectA, 
"address" : "house no. 123"
};

console.log(newuserObjectA);

console.log("Output 3: \n",userObjectA);
/****************************************************************************************************************/

/**3. Compare userObjectA  and userObjectB is equal */
console.log("Output 4: \n");
if (userObjectA == userObjectB) {
    console.log("Both are equal")
}
else{
    console.log("They are not equal")
}
/****************************************************************************************************************/

/**4. Add new property  address object to  userObjectA , and assign new properties with value country, city, zip  */

userObjectA.address={
    "country" : "Carribea",
    "city" : "cityOne",
    "zip" : "509"
};

console.log("Output 4: \n",userObjectA);
/****************************************************************************************************************/

/**5. Marge userObjectA and  userObjectB object to users array using the spread operator */

const users = [{...userObjectA}, {...userObjectB}];

console.log("Output 5: \n",users);

/****************************************************************************************************************/

/**6. Update  the users’ array of object  with new userObjectC using the spread operator */

// const userObjectC = {} ;
// const users = [{},{},{...userObjectC}];
// console.log("Output 6: \n",users);

/****************************************************************************************************************/

/**7. Create a parent class and assign some class properties with value, and create child class from 
 * the parent class, print the parent class properties value into child class using super */

 class Myclass {
     constructor(name, email){
         this._name = name;
         this._email = email;
     }
     get name(){
         return this._name;
     }
     set name(name_1){
         this._name = name_1;
     }
     get email(){
         return this._email;
     }
     set email(email_1){
         this._email = email_1;
     }
 }
 class MyClass2 extends Myclass{
     constructor(name, email){
         super(name, email);
     }
 }

 let class1 = new MyClass2("abc", "xyz@mail.com");
 console.log("Output 7: \n")
 console.log(class1.name);
 console.log(class1.email);
 
/****************************************************************************************************************/

 /**8. Create a product object with name, price, attribute, in attribute object assign another object 
  * with array of colors assign some value and also add size array, now using destructuring assign both 
  * colors and size into a separate  variable, and print */

  let product = {
      "name" : "abc",
      "price" : "5",
      "attribute" : {
          "color" : "yellow",
          "size" : "large"
      }
  };

  let var1 = product.attribute;
  console.log("Output 8: \n",var1);