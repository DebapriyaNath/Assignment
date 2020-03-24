//1st 
let userObjectA={
    name: "PG",
    email:"pg@gmail.com",
    contact:98309043023,
    address:"baker street"
};
//1st second part
console.log(userObjectA)
let userObjectB={...userObjectA};
console.log(userObjectB)
//2nd
userObjectA={
    ...userObjectA,
    address: "224"
};
console.log(userObjectA);
//3rd

function isEquivalent(a, b) {
    
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

       
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    
    return true;
}
console.log(isEquivalent(userObjectA, userObjectB));

//4th
let address={country:"a",
    city:"kol",
    zip:700094
}
userObjectA={
    ...userObjectA,
    ...address
}
console.log(userObjectA)

//5th
const merge = (...objects) => ({...objects});
let user = merge(userObjectA, userObjectB);
console.log(user)

//6th
let userObjectC = {
    name : "deadpool",
    email : "dp@xyz.com",
    contact: 924534324324,
    address: "elgin Street"
};
user=merge(userObjectA, userObjectB, userObjectC);
console.log(user)

//7th
class Heroes{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
}
class Superheroes  extends  Heroes{
    constructor(name,type,rating)
    {
        super(name,type)
        this.rating=rating;
    }

}
  let Superman = new Superheroes("Superman","ariel",10);
  console.log(Superman.name);
  console.log(Superman.type);
  console.log(Superman.rating);  


//8th
  const product = {
    name: 'SHIRT',
    price: 500,
    attribute: {
        primaries: [
            {
                color: [
                    'Red', 
                    'White', 
                    'Blue', 
                    'Grey'
                ],
                size: [
                    'XL', 
                    'XXL'
                ]
            }
        ]
    }
};

const {
    attribute: {
        primaries: [
            {
                color
            }
        ]
    }
} = product;

const {
    attribute: {
        primaries: [
            {
                size
            }
        ]
    }
} = product;

console.log("Name: ", product.name)
console.log("Price: ", product.price)
for(x in color){
    console.log(color[x]);
}
for(x in size){
    console.log(size[x]);
}