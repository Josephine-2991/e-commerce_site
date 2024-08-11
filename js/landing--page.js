
const productOne = document.querySelector('.product_container')
const shop=document.querySelector('.shop')
console.log(shop)


let newArr = []

// getProductApi function
function getProductApi(){
    fetch("https://fakestoreapi.com/products").then(function (response) {
        return response.json()
    }).then(function(products){

        newArr = products.slice(0,6)
        console.log(products)
          addProduct()
         console.log(products[0].images[0])

    })

}
getProductApi()


//addProduct function
function addProduct(){

      
    newArr.forEach(function (product,index) {
      

        productOne.innerHTML+=`
                <div class="d-flex flex-column justify-content-center align-items-center  product_cardie1" >
                    <img src="${product.image}" alt="${product.category.name}" id="product_cardie_image">
                    <h3 class="text-success fs-5 mt-2 product_titlee">${product.title.slice(0,25)}...</h3>
                    <strong class="product_cardie_text one">$${product.price}</strong>
                    <button class="button_now" type="button" onclick="addToCart()">Add to Cart</button>
                    </div>
        `

    })
   

}

// Fetch category products
const categoryProduct= document.querySelector('.product_container_one')


let newArr1 = []
function getCategoryProductApi(){
    fetch("https://api.escuelajs.co/api/v1/categories").then(function (response) {
        return response.json()
    }).then(function (categoryProducts) {

        newArr1 = categoryProducts.slice(0,6)
        console.log(categoryProducts.slice(0,4))
         addCategoryProduct() 
        //  console.log(categoryProducts[0].images[0])

    })

}
getCategoryProductApi()



function addCategoryProduct() {

      
    newArr1.forEach(function (product,index) {
      

        categoryProduct.innerHTML+=`
                <div class="d-flex flex-column justify-content-center align-items-center  product_cardie1" >
                    <img src="${product.image}" alt="${product.name}" id="product_cardie_image">
                    <h3 class="text-success fs-5 mt-2">${product.name}</h3>
                     <strong class="product_cardie_text one">$${product.updatedAt}</strong>
                    <button class="button_now" type="button">More Details</button>
                    </div>
        `

    })
   

}
const button_now=document.querySelector('.button_now')
const input=document.querySelector('.input')
let quantity=0

// Add to cart Function
function addToCart(){
    quantity+=1
    input.value=quantity
    input.style.backgroundColor='rgb(43, 42, 42)'


}





