
const productsth = document.querySelector('.product_container')
const productsthAll = document.querySelectorAll('.product_cardie')
        



let newArr = []
function getProductApi() {
    fetch("https://fakestoreapi.com/products").then(function (response) {
        return response.json()
    }).then(function (products) {
      
       
        newArr = products
        // console.log(products)
         addProduct()

    })

}
getProductApi()


let index=0
function addProduct() {

      
    newArr.forEach(function (product,index) {
      

        productsth.innerHTML+=`
                <div class="d-flex flex-column justify-content-center align-items-center  product_cardie" >
                    <img src="${product.image}" alt="${product.category.name}" id="product_cardie_image">
                    <h3 class="text-success fs-5 mt-2">${product.title.slice(0,25)}...</h3>
                    <strong class="product_cardie_text one">$${product.price}</strong>
                    <button class="button_now" type="button" onclick="addToCart()">Add to Cart</button>
                    </div>
        `
        

        
    })
   viewProduct()

}
// Add to cart Function
function addToCart(){
    quantity+=1
    input.value=quantity
    input.style.backgroundColor='rgb(43, 42, 42)'


}

function viewProduct(){
    const productsthAll = document.querySelectorAll('.product_cardie') 
    console.log(productsthAll)   
    // for(i=0; i< productsthAll.length; i++ ){
    //     console.log(productsthAll[i])
    //     productsthAll[i].addEventListener(
    //         'click', ()=>{
    //         localStorage.setItem('productId', index + 1)
    //         Window.location.href=""
    //     }
    //     )


    // }
    productsthAll.forEach((e, index) => {
        console.log(e)
        e.addEventListener('click', ()=>{
            localStorage.setItem('productId', index + 1)
            Window.location.href="indiv-page.html"
         })
        
    });


}
