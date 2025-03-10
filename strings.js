// STRINGS - characters inside of quotation marks "" ''
const firstName = "John"
const lastName = "Doe"
const myPassword = "fufutjgkmf"

// STRINGS PROPERTIES -length, concatenation(joining)
console.log(lastName.length);
console. log(firstName. length);
console.log(myPassword);
console.log(myPassword. length);

const fullName = firstName + " " + lastName
console.log(fullName);
console.log(fullName. length);

// STRING methods- built in functions that can be done on strings
const email = "jjdoe@google.co.uk"
console.log(email);
// to UPPERCASE, LOWERCASE
console.log(email. toUpperCase());
console.log(email. toLowerCase());

// indexOf, lastindexOf, charAt
console.log(email. charAt(1));
console.log(email.indexOf("o"));
console.log(email. lastIndexOf("o"));

// startsWith true or false, endWith, includes
console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase()))
console.log(email.toUpperCase().includes(".CO"));

// trim, trimStart and trimEnd(removess white spaces)
const username = "    ade001     "
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

// replace replaceALL
const myName = "jane doe"
console.log(myName.replace("e","*"));
console.log(myName.replaceAll("e", "*"));                  


// extract portions of a stringg substr, slice substring
console.log(myName.slice(2, 5))
console .log(myName.substring(0, 3))

// substr(start, num of characters)
console.log(myName.substr(0,4))


const accountNumber = "1234567890";
console.log(accountNumber.replace(accountNumber.substr(2, 6), "******"));

console.log(accountNumber.replace(accountNumber.slice(2, 8), "******"));
// concatenation
const author = "Jax Draxx"
const book = "The Ghost"
// Jax Draxx wrote the book the book
const sentence = author + " wrote the book "+ book;
console.log(sentence);


// template literals used to format variables  inside of a string
// ``
const sentence2 = `${author} wrote the book ${book.toLowerCase()} `
console.log(sentence2);


const person = 'Adam Sandler'
const movie = "Romance Scam"

// const sentence3 = person + "featured in the movie" + movie.toLowerCase
// console.log(result);

const result= `${person.toUpperCase()} featured in the movie ${movie}`
console.log(result);

// declare a country var set
const country = "Nigeria"
console.log()
console.log(country);
console.log(country.length)
console.log(country.toUpperCase());
console.log(country.slice(0, 5));
console.log(country.startsWith('e'));
console.log(country.includes("h"));
// i live in NIGERIA
console.log(`i live in ${country.toUpperCase()}`)






