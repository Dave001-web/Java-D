// // Document object Model (DOM)

// // select element on the document, tagName(h1, p), className. idNaame, combination

// const headings = document.getElementsByTagName("h1")
// console.log(headings);

// const myH1s = document.getElementsByClassName("heading")
// console.log(myH1s);

// const textPara = document.getElementById("text")
// console.log(textPara);

// // querySelector(css selector) one 
// // ., #, div p, div .inner
// const firstPara = document.querySelector("p")
// console.log(firstPara);

// const allParas = document.querySelectorAll("p")
// console.log(allParas);

// // querySelectorAll

// // interacting with the contents on the doc
// // textContent, innerText, innerHTML

const heading = document.querySelector(".heading")
console.log(heading.textContent);
console.log(heading.innerText);
heading.textContent += "JS IS FUN"
//heading.textContent = "Js is FUN"

const container = document.querySelector("div")
console.log(container.innerHTML);
container.innerHTML += "<a href='https://google.com'> visit google</a> "

const myName = "Azeez Thiago"
const intro = document.querySelector("h2")
intro.textContent = `Welcome ${myName}

// interact with attributes`
const mylink = document.querySelector(".mylink")

// facebook
mylink.textContent = "Facebook"
mylink.setAttribute("href", "https://facebook.com");
mylink.setAttribute("target", "_blank");
mylink.getAttribute("href")
console.log(mylink.getAttribute("href"));

// interact with styles
mylink.style.color = "red"
mylink.style.textDecoration = "none"

//
const btn = document.querySelector("button")
//btn.className = "mybtn"
btn.classList.add("mybtn")
btn.classList.add("kelvin")

// create element in js
const section = document.createElement("section")
section.innerHTML = "<h1>Created from JS </h1>"
section.className = "mysection"

// append it body or whereever it is good
const body = document.querySelector("body")

body.appendChild(section)

// responding to users intercation
// 1. event e.g click, submit 2. event handler, function
const testbtn = document.querySelector(".testbtn")

testbtn.addEventListener("click", () => {
    console.log("User clicked");
    body.style.backgroundColor = "red"
})


// form handling
// submit
// click
const form = document.querySelector("form")
const fullname = document.querySelector(".fullname")
const small = document.querySelector("form small")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fullnameValue = fullname.value.trim()
    console.log("form submitted", fullnameValue);
    if (fullnameValue === "") {
        small.style.display = "block"
        small.textContent = "Please provide a name"
    }
})
