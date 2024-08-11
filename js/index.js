
const productsth = document.querySelector('.product_container')



let newArr = []
function getIndividualProductApi() {
    fetch("https://api.escuelajs.co/api/v1/products").then(function (response) {
        return response.json()
    }).then(function (products) {

        newArr = products
        console.log(products)
         addProduct()
         console.log(products[0].images[0])

    })

}
getIndividualProductApi()


// function getProductApi1() {
//     fetch("https://fakestoreapi.com/products/").then(function (response) {
//         return response.json()
//     }).then(function (products){

//         newArr = products
//         console.log(products[0].title)
//         console.log(products[0].images[0])
//         // addProduct()

//     })

// }
// getProductApi1()

let index=0
function addProduct() {

      
    newArr.forEach(function (product,index) {
      

        productsth.innerHTML+=`
                <div class="d-flex flex-column justify-content-center align-items-center  product_cardie" >
                    <img src="${product.images[0]}" alt="${product.category.name}" id="product_cardie_image">
                    <h3 class="text-success fs-5 mt-2">${product.title.slice(0,25)}...</h3>
                    <strong class="product_cardie_text one">$${product.price}</strong>
                    <button class="button_now" type="button">Add to Cart</button>
                    </div>
        `

    })
   

}
// productsth.innerHTML+=`
// <div class="d-flex flex-column justify-content-center align-items-center  product_cardie" >
//         <img src="${product.images}" alt="${product.name}" id="product_cardie_image" >
//       <h3 class="text-success fs-5 mt-2">${product.name.slice(0,25)}...</h3>
//         <p class="text-start product_cardie_text">${product.description.slice(0,200)}....</p>
//        <strong class="product_cardie_text one">$${product.price}</strong>
//        <button class="button_now" type="button">Add to Cart</button>
// </div>
// `
//<p class="text-start product_cardie_text">${product.description.slice(0,200)}..</p>

