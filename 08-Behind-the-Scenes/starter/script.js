'use strict';
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  
  function printAge(){
    const output = ` ${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh you are a millenial, ${firstName}`;
      console.log(str);

      function add (a, b) {
        return a + b;
      }
    } 
    console.log(millenial);
    add(2, 2);


  }
  printAge();

  return age;
}

const firstName = 'Sardor';
calcAge(1991);
//console.log(age);
//printAge();


// hoisting with variables

console.log(me);
//console.log(job);
//console.log(year);

var me = 'Sardor';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;
*/ 

// example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;


console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
}
calcAgeArrow(1991);

const sardor = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  }
}
sardor.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = sardor.calcAge;
matilda.calcAge();

const f = sardor.calcAge;
f();

// regular function vs arrow function
var firstName = 'Matilda';

const sardor = {
  firstName: 'Sardor',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    // solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // }

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
sardor.greet();
sardor.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
}

addArrow(2, 5, 8);

// primitives vs objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Sardor',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);

// primitives vs objects in practice
// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
