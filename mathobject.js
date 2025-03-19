// MATH object

// square, round, ceil, power, trunc, random
console.log(Math.sqrt(25));
console.log(Math.pow(10, 2));
console.log(Math.round(-1.3));
console.log(Math.ceil(2.5));
console.log(Math.trunc(11.99));

console.log(Math.random());
console.log(Math,floor(Math.random()* 10 + 1));

// raffle draw car
 const customers = ["kelvin", 'david', 'khalid', 'john']

 const randomWinner = () => {
    let randomNumber = Math.floor(Math.random() * customers.length)
    return customers[randomNumber]
 }
 console.log(randomWinner());

// otp generator

//min and max
console.log(Math.min(34, 4, 56, 9.7));
console.log(Math.max(34, 4, 56, 9.7));






 
 