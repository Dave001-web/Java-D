//  asynchronous js
// codes that takes time
console.log("a");
//setTimeout(())




console.log("c");


const url = "https://dummyjson.com/products";

// fetch request
const getProducts = async ()=>{
    const response = await fetch(url)
   // console.log(response);
   const data = await response.json()
   console.log(data);
   console.log(data.products);
   // display in the browser
}

getProducts();

// promise - - containers for future value
// pending, fullfiled rejected
// .then

const getProducts2 = ()=>{
    fetch(url).then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.products); 
    })
}

getProducts2();