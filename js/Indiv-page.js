function getProductApi(){
    let productId=localStorage.getItem('productId')
        fetch("https://fakestoreapi.com/products/${productId}").then(function (response) {
        return response.json()
    }).then(function (products) {

        console.log(products)
         
        let individual_container=document.querySelector('.individual_container')

        let productDetails=''

              productDetails+=`

                    <div class="row">
                 <div class=" col con">
                    <img src=${products.image} alt="" class="product-image">

                 </div>
                 <div class=" col-6 con">
                    <p class="my-4 product_heading"> ${products.title}</p>
                    <p class="my-4">$${products.price}</p>
                     <div class=" d-flex rating-star my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="rating">
                                <path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z">

                                </path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="rating">
                                <path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z">
                                
                                </path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"class="rating">
                                <path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z">

                                </path>
                            </svg>

                        </div>
                    

                        <button class="button_now " type="button">Add to Cart</button>
                 </div>
                 <div class="col con">
                    <div class=" main_delivery">
                        <h6 class="my-2 product_heading1">DELIVERY AND RETURNS</h6>
                        <p class="para1 "><span class="Jomasy">Jomasy</span> <span class="Express">Express</span></p>
                        <p class="para2">Free delivery on thousands of products in Lagos, Ibadan & Abuja Details<p>
                        <p class="para3 my-1">Choose your location</p>

                        <select  class="select" name="" value="specify location" id="" class="my-2">
                            <option value="">specify location</option>
                            <option value="">Imo</option>
                            <option value="">Delta</option>
                        </select>

                        <select class="select" value="specify location" id="">
                            <option value="">specify location</option>
                            <option value="">Imo</option>
                            <option value="">DElta</option>
                        </select>
                        
                    </div>
                    
                    
                 </div>
        
        
        
        
        
        `
        individual_container.innerHTML=productDetails
    })

    




}
getProductApi()





