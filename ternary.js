// ternary operators
// if else
// condition ? first action : second action

const myNumber = -50

myNumber > 0 ? console.log('POSTIVE') : console.log('NEGATIVE');

// use a ternary operator to check if a number is odd or even

const num6 = 56
num6 % 2 === 0  ? console.log("EVEN") : console.log("ODD");

// Mr Mario has a car
//Mr Mario does not have a car
const hasACar = false;
const sentence = `Mr Mario ${hasACar ? "has" : "does not have"} a car`;
console.log(sentence);

// declare a variable called isUserLoggin set it to either t or f
const isUserLoggin = false;

// write a tenary operator that logs welcome user if user is logged in ad logout if the user is logged out
isUserLoggin ? console.log('Welcome User') : console.log('Log out');

// declare two variables balance and loanAmount set to any value
const balance = 20000;
const loanAmount = 4500;

// using a tenary operator tell a user if they eligible for a loan or not
// the loan eligibity criterion is that the amount of loan
// twice the balance or less

balance * 2 <= loanAmount;
loanAmount <= balance * 2 ? console.log('Eligible for loan') : console.log("Not Eligible");

  
// declare two variables savings and transactionAmount
let savings = 500000
let transactionAmount = 45000

// write a tenary operator that tells the user is the transaction will be successful or not
savings > transactionAmount ? console.log("TRANSACTION SUCCESSFUL") : console.log("TRANSACTION NOT SUCCESSFUL");

//if credit add it to the saving amount if not substract it from te saving
// transactionAmount > 0 ? (saving += transactionAmount) : (saving += transactionAmount); console.log(savings);

transactionAmount > 0 ? console.log(`credit alert of ${transactionAmount}`) : console.log(`debit alert of ${transactionAmount}`);
let myMoney = 20
console.log(myMoney.toFixed(1));



