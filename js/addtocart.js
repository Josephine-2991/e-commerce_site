
let individual_container= document.querySelector('.individual_container')
let cartInfo=document.querySelector('.cart-parent')
let indiv_heading=document.querySelector('.indiv-heading')

upDateCartUI()
let cart= getCart()


console.log(cart)


//Displaying product on the cart page
function displayProduct(arr){
    let displayCart
    // let heading=document.createElement('div')
    // heading.appendChild(indiv_heading)
    

      
    arr?.forEach(eachProduct =>{
      displayCart=`

      <div class="d-flex flex-row gap-5 con1">
                <div class="con">
                    <div class="d-flex gap-3">
                        <img src=${eachProduct.product.image} alt="" class="product-image">
                         <div class="d-flex flex-column">
                          <p>${eachProduct.product.title}</p>
                           
                          <button class='button_now remove1'  onclick={removeProduct(${eachProduct.product.id})}>Remove</button>

                         
                        </div>

                    </div>
                    
                    <div  class="cart-price">
                        <p>$${eachProduct.product.price}</p>
                        <div class="d-flex flex-row gap-2">
                                <button class="button_now add mx" onclick={incrementProductCount(${eachProduct.product.id})}>+</button>
                                <p>${eachProduct.count}</p>
                                <button class="button_now remove "  onclick={decrementProductCount(${eachProduct.product.id})}>-</button>           
                       </div>

                    </div>
                </div>

                
                    
                </div>

`

     
    let newDiv= document.createElement('div')
    newDiv.innerHTML=displayCart
    individual_container.appendChild(newDiv)
});


}
displayProduct(cart)


cartInfo.addEventListener('click', displayProduct )

