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

*/
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
