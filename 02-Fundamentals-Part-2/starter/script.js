// function logger(){
//   console.log('My name is Sardor');
// }

// // calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges){
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function declaration 

// function calcAge1(birthYear){
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(1998);
// console.log(age1);

// // function expression also called anonymous function 

// const calcAge2 = function (birthYear){
//   return 2023 - birthYear;
// }

// const age2 = calcAge2(1998);
// console.log(age2);

// // Arrow function

// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1998, 'Sardor'));

// use strict;

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');


// function logger(){
//   console.log('My name is Sardor');
// }

// // calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges){
//  // console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// const orangeJuice = fruitProcessor(1, 4);
// console.log(orangeJuice);
// function calcAge1(birthYear){
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(1998);
// console.log(age1);

// // function expression also called anonymous function

// fucntion declaration
// function calcAge1(birthYear){
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(1998);
// console.log(age1);

// // function expression also called anonymous function
// const calcAge2 = function (birthYear){
//   return 2023 - birthYear;
// }

// const age2 = calcAge2(1998);
// console.log(age2);


// function declaration can const before the function declaration but function expression can't 
// fucntion expression is more useful than function declaration because it can be used in many ways and it is more flexible than function declaration
// function expression is also called anonymous function because it doesn't have name and it is stored in a variable 
// firt class function means that function can be stored in a variable and can be passed as an argument and can be returned from another function

// Arrow function

// const calcAge3 = birthyear => 2023 - birthyear;
// const age3 = calcAge3(1998);
// console.log(age3);
// console.log(calcAge3(1995));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1998, 'Sardor'));

// const describeCountry = function(country, population, capitalCity){
//   return `${country} has ${population} people and its capital city is ${capitalCity}`;
// }

// const country1 = describeCountry('Uzbekistan', '33 million', 'Tashkent');
// const country2 = describeCountry('USA', '330 million', 'Washington DC');
// const country3 = describeCountry('Russia', '144 million', 'Moscow');


// console.log(country1);
// console.log(country2);
// console.log(country3);

// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

// function describeCountry(country, population, capitalCity){
//   return `${country} has ${population} people and its capital city is ${capitalCity}`;
// }

// const country1 = describeCountry('Finland', '6 million', 'Helinski');
// const country2 = describeCountry('Uzbekistan', '33 million', 'Tashkent');
// const country3 = describeCountry('USA', '330 million', 'Washington DC');

// console.log(country1);
// console.log(country2);
// console.log(country3);

// function declaration
// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)


// 1st 
// function percentageOfWorld1(population){
//   const worldPopulation = 7900
//   const calculate = (population / worldPopulation) * 100;
//   return calculate;
// }

// const china = 1441;

// const percentage1 = percentageOfWorld1(china);
// console.log(percentage1);

// function percentageOfWorld1(population){
//   const worldPopulation = 7900
//   const calculate = (population / worldPopulation) * 100;
//   return calculate;
// }

// const china = 1441;
// const uzbekistan = 33;
// const usa = 330;

// const percentage1 = percentageOfWorld1(china);
// const percentage2 = percentageOfWorld1(uzbekistan);
// const percentage3 = percentageOfWorld1(usa);

// console.log(percentage1, percentage2, percentage3);
// console.log(`China has ${china} million people, so it's about ${percentage1}% of world population ` )
// console.log(`Uzbekistan has ${uzbekistan} million people, so it's about ${percentage2}% of world population ` )
// console.log(`USA has ${usa} million people, so it's about ${percentage3}% of world population ` )

//China has 1441 million people, so it's about 18.2% of
// the world population

// 2nd
// function percentageOfWorld1(population) {
//    return (population / 7900) * 100;
//    }
//    const percentageOfWorld2 = function (population) {
//    return (population / 7900) * 100;
//    };
//    const percPortugal1 = percentageOfWorld1(10);
//    const percChina1 = percentageOfWorld1(1441);
//    const percUSA1 = percentageOfWorld1(332);
//    console.log(percPortugal1, percChina1, percUSA1);

//    const percPortugal2 = percentageOfWorld2(10);
//    const percChina2 = percentageOfWorld2(1441);
//    const percUSA2 = percentageOfWorld2(332);
//    console.log(percPortugal2, percChina2, percUSA2);

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

// const percentageOfWorld3 = population => (population / 7900) * 100;

// console.log(percentageOfWorld3(1441));

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
//   }
//   const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
//   };
//   const percPortugal1 = percentageOfWorld1(10);
//   const percChina1 = percentageOfWorld1(1441);
//   const percUSA1 = percentageOfWorld1(332);
//   console.log(percPortugal1, percChina1, percUSA1);

//   const percPortugal2 = percentageOfWorld2(10);
//   const percChina2 = percentageOfWorld2(1441);
//   const percUSA2 = percentageOfWorld2(332);
//   console.log(percPortugal2, percChina2, percUSA2);

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2,5)); 
// const calcAge = function(birthYear){
//   return 2023 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

// if(retirement > 0) {
//   console.log(`${firstName}  retires in ${retirement} years`);
//   return retirement;
// } else {
//   console.log(`${firstName} has already retired )`)
//   return -1;
// }

  
// } 

// console.log(yearsUntilRetirement(1998, 'Sardor'));
// console.log(yearsUntilRetirement(1940, 'Leyla'));


// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK �

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(66, 45, 45);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolhins, avgKoalas){
//   if(avgDolhins >= 2 * avgKoalas){
//     console.log(`Dolphins win (${avgDolhins}) vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolhins){
//     console.log(`Kualas win (${avgKoalas} vs. ${avgDolhins})`);
//   } else {
//     console.log('No team wins.....');
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(12, 321);


// // test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23,34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


// AAAAAAAAAAAAArrays
/*
const friend1 ='Micheal';
const friend2 ='Sara';
const friend3 ='Peter';

const friends = ['Micheal', 'Sara', 'Peter'];
console.log(friends);

const years = new Array(1991, 1992, 1993);

console.log(friends[2]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Sardor'
const jonas = [firstName, 'Khomidjonov', 2023-1998, 'front-end', friends];

console.log(jonas);

// Exercise 
const calcAge = function (birthYear){
  return 2023 - birthYear;
}

const yearss = [1990, 1992, 1993, 1998, 1995, 2018];

const age1 = calcAge(yearss[0]);
const age2 = calcAge(yearss[1]);
const age3 = calcAge(yearss[yearss.length - 1]);
const age4 = calcAge(yearss[3]);
console.log(age1, age2, age3, age4);

const ages = [calcAge(yearss[0]), calcAge(yearss[1]), calcAge(yearss[3])]
console.log(ages);
*/
/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');  // push adds in end 
console.log(friends);
console.log(newLength);


friends.unshift('John'); // inshift adds on front 
console.log(friends);

// Remove elements
friends.pop( ); // remove from last one 
const popped = friends.pop( );
console.log(popped);
console.log(friends);

friends.shift(); // remove first element 
console.log(friends);

console.log(friends.indexOf('Steven'));

//=== strict equality
//es50 indexOf instead use includes it will tell u if its there return true else false
friends.push('Sardor');
console.log(friends.includes('Steven'));
console.log(friends.includes('bob'));
console.log(friends)
console.log(friends.includes('23'));


if (friends.includes('Sardor')) {
  console.log('You have a frind calles Sardor');
}
*/
/*

/////////////////////////////////////////////////////
Coding Challenge #2
Steven is still building his tip calculator, 
using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, 
and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any 
bill value as an input and returns
the corresponding tip, calculated based on the 
rules above (you can check out
the code from first tip calculator challenge if 
you need to). Use the function
type you like the most. Test the function using 
a bill value of 100
2. And now let's use arrays! So create an array '
bills' containing the test data below
3. Create an array 'tips' containing the tip 
value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the 
total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in 
each position, and that value can
actually be the returned value of a function! 
So you can just call a function as array
values (so don't store the tip values in separate 
variables first, but right in the new
array) �
GOOD LUCK �
*/
/*
const calcTip = function(bill){
  return bill >= 500 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

//const caclTip = bill >= 500 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals); */

/////////////////////////////////
// Objects

// arrayes ordered it will go by order 01234..
/*
const Sardors = [
  'Sardor',
  'Khomidjonov',
  2023-1998,
  'Front-end',
  ['Michael', 'Peter', 'Steven']
];

const Sardor = {
  firstName: 'Sardor',
  lastName: 'Khomidjonov',
  age: 2023 - 1998 ,
  job: 'Front-end',
  friends: ['Michael', 'Peter', 'Steven']
};
*/

// const Sardor = {
//   firstName: 'Sardor',
//   lastName: 'Khomidjonov',
//   age: 2023 - 1998 ,
//   job: 'Front-end',
//   friends: ['Michael', 'Peter', 'Steven'],
//   sex: 'male',
//   status: 'super single'
// };

// console.log(Sardor);

// console.log(Sardor.lastName);
// console.log(Sardor['lastName']);

// const nameKey = 'Name';
// console.log(Sardor['first' + nameKey]);
// console.log(Sardor['last' + nameKey]);


// const inteserestedIn = prompt('What do u want to know about Jonas? Choose between fristName, lastName, age, job and friends');

// if (Sardor[inteserestedIn]){
//   console.log(Sardor[inteserestedIn]);
// } else {
//   console.log('Wrong request! Choose between fristName, lastName, age, job and friends')
// }

// Sardor.location = 'Tashkent'; // dot notation add
// Sardor['Twitter'] = '@sardor'; // add ''
// console.log(Sardor);

// console.log(`${Sardor.firstName} has ${Sardor.friends.length} friends, and 
// his best friend is called ${Sardor.friends[0]}`);


// const Sardor = {
//   firstName: 'Sardor',
//   lastName: 'Khomidjonov',
//   age: 2023 - 1998 ,
//   birthYear: 1998,
//   job: 'Front-end',
//   friends: ['Michael', 'Peter', 'Steven'],
//   sex: 'male',
//   status: 'super single',
//   hasDriverLicence: true,

  // calcAge: function(birthYear){
  //   return 2023 - birthYear;
  // }

  // calcAge: function(){
  //   //console.log(this);
  //   return 2023 - this.birthYear;
  // }

//   calcAge: function(){
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   }
// };

// console.log(Sardor.calcAge());

// console.log(Sardor.age);
// console.log(Sardor.age);
// console.log(Sardor.age);
//console.log(Sardor['calcAge'](1998));


//////////////////////////////////////////////////////

// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! 
//This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �

const  Mark = {
  fullName: 'Mark Miller',
  mass: 78 ,
  height: 1.69,
  calcBMI: function(){
    return this.mass / (this.height ** 2);
  },
};

const markBMI = Mark.calcBMI();
console.log(markBMI);

const John = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    return this.mass / (this.height ** 2);
  },
}


