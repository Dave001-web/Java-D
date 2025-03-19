// REST AND SPREAD OPERATOR
// ...

//REST OPERATOR
const arr = [3, 4, 6, 8]
// structured
const [...others] = arr
console.log(others);

const countries = ["Togo", "Cameroon", "Gabon", "Ghana", "Guinea"]
const [x, ...rest] = countries

const product = {
    title: "Micheal Kors",
    price:  300,
    image: "image",           
}

const {price, ...property} = product;

// spread operator ...
//
const detailProduct = {
    stock: 6,
    color: "red",
    category: "bags",
    weight: 13,
    ...product,
}
console.log(detailProduct);

const onlineStudent = ["Osas", "Uthman", "Isaac", "John"]
const physicalSudent = ["Micheal", "Uju", "Samuel", "Vera"]

const allStudent = [...physicalStudent, ...onlineStudent, "Ruud", "seyi"]
console.log(allStudent);



