// [element, element2, element3]
// arrays usually contains the datatypes
// empty arrays are falsy value
const students = ["David", "Quadri", "Isaac", "isaac", "Johnpaul", "Johnpaul"]
// arrays properties - length 
console.log(students);
console.log(students.length);
//gettin elements from an array , position
console.log(students[0]);
console.log(students[2]);

// you can change elements in an array , position

//students[0] = "Azeez"
console.log(students);
students[3] = "Micheal"
console.log(students);
students[students.length - 1] = "John Doe"
console.log(students);

// arrays methods
// add and remove elements from an array (front or back)
// structured data type stack LIFO
// push, unshift (add  elements to an)
students.push("Micheal");
students.push('Juwon')
students.unshift("Uthman")

console.log(students);
 
// pop and shift
students.pop()
students.shift()

// includes
console.log(students.includes("David"));

//indexOf, lastIndexOf, at
console.log(students.indexOf("Isaac"));
console.log(students.lastIndexOf("Isaac"));
console.log(students.at(2));   


// extracting portions of an array --- slice(start, end(non-inclusive))
console.log(students.slice(0, 3));
console.log(students.slice(3, 5)); // 6

// methods to convert arrays to strings
// join, toString
console.log(students.join()); // another separator
console.log(students.toString()); /// ,

// iterator method(going through over each element)
// higher order methods(function)
// it needs another function as parameter
// forEach, map, find, filter, some, every, reduce
// forEach - executes a fucntion for every element in an array
students.forEach((student)=>{
    console.log(student.toUpperCase());
}) 

// give me the firts letter of every student name in the students array
students.forEach((student) => {
    console.log(student.charAt(0));  
})

// map - creates a new array with the result of a function
const smallCaseStudents = students.map((student) => {
    return student.toLowerCase
})
console.log(smallCaseStudents);

// filter - create a new array with element that pass a test(search condition)
const myNums = [3, 5, 6, 8, 10, 1, 4, 2]

// > 5
const greaterThan5 = myNums.filter((num) => {
    return num > 5
})
console.log(greaterThan5);

const evenNumbers = myNums.filter((num) => {
    return num % 2 === 0
})
console.log(evenNumbers);

const oddNumbers = myNums.filter((num) => {
    return num % 2 !== 0
})
console.log(oddNumbers);

const lengthGreaterthan6 = students.filter((student) => {
    return student.length > 6  
})
console.log(lengthGreaterthan6);

// find  return the first element that passes a test (search condition)

const findgreaterthan6 = myNums.find((num) => num > 5 )
console.log(findgreaterthan6);

const findstudent5 = students.find((student) => student.length === 5)
console.log(findstudent5);

// some - returns true if at least one of every element passes a test 
const ifSomeGreater5 = myNums.some((num) => num > 5)
console.log(ifSomeGreater5);

// and every - returns true if all element passes a test 
const ifallGreater5 = myNums.every((num) => num > 5)
console.log(ifallGreater5);

// reverse, sort, concat, reduce
// string split
const carBrands = ["Toyota", "Rollsroyce", "Ferrari", "Tesla", "BMW"]
console.log(carBrands);

// console.log(carBrands.reverse);
console.log(carBrands.sort());// a-z
console.log(carBrands.sort().reverse());// z-a

// sorting numbers 0 - up up - 0
const prices =[200, 4000, 650, 100, 3500]
console.log(prices.sort()); // buggy
console.log(prices.sort((a, b) => a - b));// smallest to largest
console.log(prices.sort((a, b) => b - a));// high to low

// concat 
const africanCountries = ["Togo", "Mauritius"]
const asianCountries = ["Singapore", "Japan", "South Korea"]

const holidayLocations = africanCountries.concat(asianCountries)
console.log(holidayLocations);

// reduce = reduces every element in array to a single value
// two parameters , cb function, start point
const totalPrice = prices.reduce((acc, curr)=>{
    return acc + curr
}, 0)
console.log(totalPrice);

const fruit = "banana"
// split method on a string
console.log(fruit.split(""));
console.log(fruit.split("a"));

// write a function that reverse the letter in a word
// cat -- tac
const reverseWord = (word) => {
    return word.split("").reverse().join("")
}
console.log(reverseWord("cat"));
console.log(reverseWord("gel"));

// palindrome - words that spelt the same both from the back and front
// madam level tat noon pap eye

function ispalindrome(word){
    return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
}
console.log(ispalindrome("Madam"));

// SET - unique values in an array 
const users = ["John", "Dave", "Nate", "John", "Dave"]
console.log(new Set(users));

//  destructing
// complex data structures

const transaction = [2000, - 300, -250, -7000, -5000]


