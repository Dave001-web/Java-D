// conditional statement 
// if statement
//if(condition true){
//lines of code 
//}

if (true){
    console.log("Hello world");    
}

//18//YOU ARE ELIGIBLE TO VOTE
const age = 25

if(age >= 18) {
    console.log("YOU ARE ELIGIBLE TO VOTE");
    
}
const password = "dhhhbjsani"
if (password.length >= 9) {
    console.log("password is strong");
}

//if else staement 
if (false) {
    console.log("Hello class");
}else {
    console.log("goodbye class");
    
}

const balance = 200000
const amount = 300000
if(amount > balance) {
    console.log("INSUFFICIENT FUND");
}else {
    console.log('Transaction successful');
}
const userPin = 2090
const enteredPin = 2099;
    
if(userPin === enteredPin) {
    console.log("PIN IS CORRECT");
} else {
    console.log("INCORRECT PIN");
}
 const email = "davidmbang@google.co.uk"
 if (email.includes ('@')){
    console.log("EMAIL IS VALID");
 } else {
    console.log("EMAIL NOT VALID");
    
 }


const score = 50
if(score >= 50){
    console.log('YOU PASSED THE EXAM');
    
} else {
    console.log('YOU FAILED THE EXAM');
    
}

const num = 0
if (num > 0) {
    console.log("positive");
    
}else {
    console.log("negative");
    
}


const num1 = 100
const num2 = 800
if(num1 > num2) {
    console.log(`Num1 ${num1} is greater that num2 ${num2}`);
    
}else {
    console.log(`Num2 ${num2} is greater than num1 ${num1}`);
    
}

// write a program tat checks if a number is even or odd
let num3 = 56
if(num3 % 2 === 0){
    console.log(`${num3}is EVEN`);
    
}else {
    console.log(`${num3} is ODD`);
    
}
const purchaseAmount = 600 
if(purchaseAmount > 100) {
    console.log("YOU HAVE A DISCOUNT");
    
} else {
    console.log("BUY MORE");
    
}



const averageA = (54 + 56 + 78) / 3
const averageB = (67 + 60 + 82) / 3

console.log(`Team A has an average score of ${averageA}`);
console.log(`Team B has an average score of ${averageB}`);

if(averageA > averageB){
    console.log("Team A wins");
    
}else {
    console.log("Team B wins");
    
}
// write a program that tells if a student should be in class or at home, the program uses a 24hours clock 0 - 24 
//the student should be in class between the hours of 10 and 16 
const clockA = 0 - 24
const clockB = 10 - 16 
 
// //let timeOfDay = 13
// if ( time0fDay > 10 && timeOfDay < 16){
//     console.log("YOU SHOULD BE IN CLASS");
    
// } else {
//     console.log("BE AT HOME");
    
// }//

let TransactionA = 4000
if ( TransactionA > 4000){
    console.log("Let charges be 100");
    
} else {
    console.log("let charges be 50");
    
}

// if ( 
//  word.includes("a") || 
//  word.includes("e") || 
//  word.includes("i") || 
//  word.includes("o") || 
//  word.includes("u") ){
//     console.log("the word is a vowel");
// } else{
//     console.log("The word is a consonant");
// }

//
const scoreA = 100
const scoreB = 100
//draws a win b wins 
// else if statement more than 2 choices

if (scoreA > scoreB) {
    console.log("A wins");
    
} else if (scoreB > scoreA) {
    console.log("B wins");
    
} else {
    console.log("it is a draw");
    
}
// write a program that rates movies
// above 8 is excellent
// above 6 is good
// above 5 is average
// else is bad
const movieRating = 6.5

if (movieRating >= 8) {
    console.log("Excellent Movie");
    
} else if (movieRating >= 6) {
    console.log("Good Movie");
    
} else if ( movieRating >= 5) {
    console.log("Average movie");
    
} else {
    console.log("Bad movie");
    
}
// less than 18 - young club
// 18 - 60 - adult club
// above 60 - old people club

const usersAge = 45
if ( usersAge > 60) {
    console.log("old people club");
} else if (usersAge < 18) {
    console.log("young club");
} else {
    console.log("Adult club");
}


const grade = "p"

switch (grade) {
    case "A":
    case "a":
    console.log("EXCELLENT");
    break;
    case "B":
    case "b":
        console.log("VERY GOOD");
    break;
    case "C":
    case "c":
    console.log("GOOD");
    break
    case "D":
    case "d":
    console.log("FAIR");
    break
    case "E":
    case "e":
    console.log("PASS");
    break
    case "F":
    case "f":
    console.log("FAIL");
    break
    default:
    console.log("invalid grade, try again");
}











