// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javaScriptIsFun = 'YES!';
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null); // object

// let age = 30; 
// age = 31;
// console.log(age);

// const birthYear = 1998;
// birthYear = 1990;
// console.log(birthYear);

// operators 
//math operators
// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// assignment operators

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// comparison operators

// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// const isFullAge1 = ageSarah >= 19; 
// console.log(isFullAge);

// console.log(now - 1991 > now - 2018);

// operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// let x1, y;
// x1 = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x1, y);

// console.log(25 - 10 - 5);


// const ageJonas = 20;
// const ageSarah = 30;
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95; 

// const test1 = markMass / markHeight ** 2;
// const BMIJohn = johnMass /  ( johnHeight * johnHeight);
// const markHigherBMI = test1 > BMIJohn;

// console.log(test1, BMIJohn, markHigherBMI); 

// const markMass1 = 95;
// const markHeight1 = 1.88;
// const johnMass1 = 85;
// const johnHeight1 = 1.76;

// const test2 = markMass1 / markHeight1 ** 2;
// const BMIJohn1 = johnMass1 /  ( johnHeight1 * johnHeight1);
// const markHigherBMI1 = test2 > BMIJohn1;

// console.log(test2, BMIJohn1, markHigherBMI1);

// // Strings and Template Literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1998;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// Taking Decisions: if / else Statements

// const age = 7;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Sarah can start driving license.');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// if (age >= 18) {
//   console.log('Sarah can start driving license.');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2015;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);


// Coding Challenge #2 
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either 
"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95; 

// const test1 = markMass / markHeight ** 2;
// const BMIJohn = johnMass /  ( johnHeight * johnHeight);
// //const markHigherBMI = test1 > BMIJohn;

// if (test1 <= BMIJohn){
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${test1})`);
// } else {
//   console.log(`Marks's BMI (${test1}) is higher than John's (${BMIJohn})`)
// }

// const markMass1 = 95;
// const markHeight1 = 1.88;
// const johnMass1 = 85;
// const johnHeight1 = 1.76;

// const test2 = markMass1 / markHeight1 ** 2;
// const BMIJohn1 = johnMass1 /  ( johnHeight1 * johnHeight1);
// //const markHigherBMI1 = test2 > BMIJohn1;

// //console.log(test2, BMIJohn1, markHigherBMI1);
// if (test2 <= BMIJohn1){
//   console.log(`John's BMI (${BMIJohn1}) is higher than Mark's (${test2})`);
// } else {
//   console.log(`Marks's BMI (${test2}) is higher than John's (${BMIJohn1})`)
// }



// Type Conversion and Coercion

// type conversion

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' > '18');

// let n = '1' + 1; // '11'
// n = n - 1;

// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }


// Equality Operators: == vs. ===

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');
// if (age == 18) console.log('You just became an adult :D (loose)');
// '18' == 18 true
// '18' === 18 false

// const favourite = Number(prompt("What's your favourite number?"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//   console.log('7 is also a cool number');
// } else if (favourite === 9) {
//   console.log('9 is also a cool number');
// }
// else {
//   console.log('Number is not 23 or 7 or 9');
// }


//logical operators
/*
const hasDriversLicense = true; // A
const hasGoodVision = false ; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense || hasGoodVision || isTired);
*/

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only 
wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have 
the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;
// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore = 110;

// const dolphinsAvarageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const koalasAvarageScore = (koalasScore1 + koalasScore2 + koalasScore) / 3;

// console.log(dolphinsAvarageScore, koalasAvarageScore);

// if (dolphinsAvarageScore > koalasAvarageScore) {
//   console.log(`Dolphins won the trophy with ${dolphinsAvarageScore} points!`);
// } else if (dolphinsAvarageScore < koalasAvarageScore) {
//   console.log(`Koalas won the trophy with ${koalasAvarageScore} points!`);
// } else if (dolphinsAvarageScore === koalasAvarageScore) {
//   console.log(`Both teams won the trophy!`);
// } else {
//   console.log(`No one won the trophy!`);
// }

// const dolphinsScore11 = 97;
// const dolphinsScore22 = 112;
// const dolphinsScore33 = 101;
// const koalasScore11 = 109;
// const koalasScore22 = 95;
// const koalasScore33 = 123;

// const dolphinsAvarageScore = (dolphinsScore11 + dolphinsScore22 + dolphinsScore33) / 3;
// const koalasAvarageScore = (koalasScore11 + koalasScore22 + koalasScore33) / 3;

// console.log(dolphinsAvarageScore, koalasAvarageScore);

// if (dolphinsAvarageScore > koalasAvarageScore && dolphinsAvarageScore >= 100) {
//   console.log(`Dolphins won the trophy with ${dolphinsAvarageScore} points!`);
// } else if (dolphinsAvarageScore < koalasAvarageScore && koalasAvarageScore >= 100) {
//   console.log(`Koalas won the trophy with ${koalasAvarageScore} points!`);
// } else if (dolphinsAvarageScore === koalasAvarageScore && dolphinsAvarageScore >= 100 && koalasAvarageScore >= 100) {
//   console.log(`Both teams won the trophy!`);
// }
// else {
//   console.log(`No one won the trophy!`);
// }

//switch statement

// const day = 'friday';

// switch(day){
//   case 'monday':
//     console.log('Plan yiur week!');
//     console.log('Plan monday What you gonna to do?');
//     break;
//     case 'tuesday':
//       console.log('go shopping');
//       break;
//       default:
//         console.log('day a not valid');
// }

// const day = 'sunday'
 

//  if (day === 'monday') {
//   console.log('do ztm course')
//  } else if (day === 'tuesday'){
//   console.log('do udemy course')
//  } else if (day === 'wednesday'){
//   console.log('do js')
//  }else if (day === 'thursday' || day === 'friday'){
// console.log('do 77.uz')
//  }else if (day === 'saturday' || day === 'sunday'){
//   console.log('have a rest ur eyes need rest')
//  } else {
//   console.log('Not a valid day')
//  }

//statement and expressions

// 3 + 4
// 1991
// true && false && !false

//if (23 > 10) {
//  const str = '23 is bigger';
//}


// ternary operator

// const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// const bill = 40;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;



