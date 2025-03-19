const customers = ["Ade", "Ngozi"]

customers.map((customer) => {
    console.log(customer.charAt(0));
});

//[object1, object2]
//name, age, gender, location, phoneNumber
const myCustomers = [
    {name:"Kung Lao", age: 25, gender:"M", location: "Ibadan", purchase: 6000,},
    {name:"Johnny Cage", age: 30, gender:"M", location: "Lagos", purchase: 8000},
    {name:"Liu Kang", age: 22, gender:"M", location: "Ibadan", purchase: 4300},
    {name:"Sonya Blade", age: 62, gender:"F", location: "Lagos", purchase: 7400},
    {name:"Kitana", age: 32, gender:"F", location: "Ondo", purchase: 6200 }
]
//
myCustomers[1].name
const { name } = myCustomers[1];
myCustomers[1]["name"];

myCustomers.map((customer) => {
    console.log(customer.name);  
}) 

// get customers that a 25 and above
const olderCustomers = myCustomers.filter((customer) => customer.age >= 25)
console.log(olderCustomers);

const youngCustomers = myCustomers.filter((customer) => customer.age < 25)
console.log(youngCustomers);

const femaleCustomers = myCustomers.filter((customer) => customer.gender === "F")
console.log(femaleCustomers);

const maleCustomers = myCustomers.filter((customer) =>customer.gender.toLowerCase === "M".toLowerCase )
console.log(maleCustomers);

//const lengthlocation = customer.filter((customer) => {})


// let lagosCustomers = myCustomers.filters((customer) => { 
//     return customer.location === "Lagos"
// })
// console.log(lagosCustomers.length);

const arrangedCustomersByage = myCustomers.sort((a, b) => a.age - b.age)
//console.log(prices.sort((a, b) => a - b));// smallest to largest

const averageCustomerByage = myCustomers.averageCustomerByage

const totalAge = myCustomers.reduce ((acc, customer) => acc + customer.age, 0)
const avgAge = totalAge / myCustomers.length
console.log(avgAge);

const findCustomer1 = myCustomers.find((customer) => customer.location === "Ibadan");
console.log(findCustomer1);

// get a new array containing all the purchase of all customers
const purchaseCustomers = myCustomers.map((customer) => customer.purchase);
console.log(purchaseCustomers);


// get all the customers with a minimum of 6000 purchase amount 
const amountCustomers = myCustomers.filter((customer) => customer.purchase >= 6000)
console.log(amountCustomers);

// get the total purchase amount of all customers
const totalAmount = myCustomers.reduce ((sum, amount) => sum + amount.purchase, 0)
console.log(totalAmount);

// get the average purchase for the last three customers
const lastThreeCustomers = myCustomers.slice(2).reduce((acc, customer) => acc + customer.purchase, 0)
const avg = lastThreeCustomers / 3
console.log(avg);


// get the total purchase amount for all the customers
const IbadanTotalPurchase = myCustomers.filter((customer) => customer.location === "ibadan").reduce((acc, customer) => acc + customer.purchase, 0)
console.log(IbadanTotalPurchase);

const shoppingCart = [
    {title: "Jean", price: 100, qty: 2},
    {title: "Hat", price: 50, qty: 4},
    {title: "Cream", price: 30, qty: 1},
    {title: "Duffle Bag", price:150, qty: 5},
    {title: "Balaclava", price: 70, qty: 3}
]
shoppingCart.map((item) => {
    console.log(`${item.title} costs $${item.price}`);
})
const highProduct = shoppingCart.filter((item) => item.price > 70)
const TotalAmount = shoppingCart.map((item) => {
    console.log(`${item.title} costs $${item.price * item.qty}`);
})
// shoppingCart.reduce ((item.price, item.qty) => item.price + item.qty, 0)
// console.log(shoppingCart);

const totalValue = shoppingCart.reduce((acc, item) => acc + item.price * item.qty, 0)
console.log("Total cost is " + totalValue);





