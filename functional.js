//functions

//4567946

// function declaration
// function functionName (){write the code}
// logger hello world to the console
function logger() {
  console.log("Hello World");
}
// call it or invoke
logger();

// function welcomeUser () {
//     console.log("Welcome User");
// }
// welcomeUser();

// funtion parameter - values passed to the funtion to use, (parameters)
function welcomeUser(name) {
  console.log(`welcome ${name}`);
}
welcomeUser("vera");
welcomeUser("Quadri");
welcomeUser("uju");

// write a function thats add two number togethers
function addTwoNumbers(n1, n2) {
  const total = n1 + n2;
  console.log(total);
}
addTwoNumbers(34, 10);
addTwoNumbers(50, 100);

// write a function that compute the difference between two numbers
function subtractTwoNumber(n1, n2) {
  console.log(n1 - n2);
}
subtractTwoNumber(90, 5);
subtractTwoNumber(2, 5);

// write a function called wordConverter, that converts all alphabets
// to uppercase
function wordConverter(word = "word") {
  console.log(word.toUpperCase);
}
wordConverter("cat");

function replaceAllE(word) {
  console.log(word.toLowerCase().replaceAll("e", "*"));
}
replaceAllE("elephant");
replaceAllE("EYE");

function checkLength(word) {
  console.log(word.length);
}
checkLength("idan");

function firstcharacter(word) {
  console.log(word.charAt(0));
}
firstcharacter("cat");
firstcharacter("bob");

function initials(firstName, lastName) {
  console.log(firstName.charAt(0) + lastName.charAt(0));
}
initials("John", "Doe");

// write a function that abstract the first 5 letter provided
function abstract(word) {
  console.log(word.slice(0, 5));
}
abstract("firstname");

// write a function that tells if a number  is  positive or negative
function positiveOrNegative(num) {
  num > 0 ? console.log("POSITIVE") : console.log("NEGATIVE");
}
positiveOrNegative(-67);

// FUNCTION TO A FACTORY THAT PRODUCES A PRODUCT
// RETURNS A VALUE return
function sayHello() {
  return "say hello";
}
const val = sayHello();
console.log(val);

// write a function that multiples two numbers
function multiplyTwoNums(n1, n2) {
  return n1 * n2;
}
console.log(multiplyTwoNums(6, 8));

function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log(average(3, 3, 3));

function weekTodays(weeks) {
  const days = weeks * 7;
  return days;
}
function hoursTominutes(hours) {
  return hours * 60;
}

console.log(hoursTominutes(2));
function yrsToMth(years) {
  return `${years} years is equal to ${years * 12} months`;
}
console.log(yrsToMth(2));

function rts (){
    return 40
}
// function expression 
const myName = function (){
    return "John"
};
console.log(myName());

const divideTwoNums = function (n1, n2) {
    return n1 / n2
}

console.log(divideTwoNums(9, 3));
console.log(divideTwoNums(10, 2));

//hoisting
// func declaration - hoisted above puts at the top of the doc

removealla("email")
function removealla(word){
    console.log(word.replace("a", ""));   
}


// arrow functions let funcName = ()=>{}
const myArrowFunc = () => {
    console.log("Arrow Function");
}

myArrowFunc();
// write an arrow function that takes in two scores as a perimeter
//  your functio should return diferent outcomes based on the score 
// if the score a is more than b return 'score A wins'
const checkWinner = (scoreA, scoreB) => {
    if (scoreA > scoreB) {
        return "score A wins";
    } else if (scoreA < scoreB) {
        return "Score B wins";
    }else {
        return "it is A DRAW"
    }
}
console.log(checkWinner(56, 78));

// 1. // write a function called calculateBMI
// takes in body mass and height as a parameter
// the function should return the BMI index rounded to 2 decimal places
// use the value 70, 1.75 === 22.86

const calculateBMI = ( mass, height) => {
    const bmi = mass / height ** 2
    return bmi.toFixed(2)
}
console.log(calculateBMI(70, 1.75));
 
// 2. // write a functionn using the result of the bmi calculated above 
// to determine the BMI category
// anything less than 18.5 is underweight
// anything between 18.5 and 24.9 is normal weight
// between 25 and 29.9 is overweight
//  anything else is oboese

const getBMICategory = (bmi) => {
    if(bmi < 18.5){
        return"Underweight"
    } else if (bmi > 18.5 && bmi <= 24.9){
        return "Normal weight"
    } else if (bmi < 25 && bmi >=29.9) {
        return "Overweight"
    } else {
        return "oboese"
    }
}
console.log(getBMICategory(calculateBMI(70, 1.75)));
