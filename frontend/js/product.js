import { getProduct } from './api.js';
import data from './data.js';
import {theUrl} from './utils.js';

//console.log({data});

// let images=["img/card1.png","img/card2.png","img/card3.png","img/card4.png","img/card5.png","img/card6.png","img/card7.png"];
const productPage = {
    after_render: () =>{
        const request = theUrl();
        var btn_select = document.getElementsByClassName("btn-wish cart-btn");
        
        for (var i = 0; i < btn_select.length; i++) {
            btn_select[i].addEventListener('click', ()=>{
                document.location.hash = `/cart/${request.id}`;
            })
        }
    
    },
    render: async () => {
        // const images = data;
        const request = theUrl();
        console.log(request);
         const product = await getProduct(request.id);
         console.log(product);

        const response  = await fetch('http://localhost:5000/api/products', {
            headers:{
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok){
            return `<div> Error in getting data</div>`;
        }
        const images = await response.json();

    //    const {theProduct} = 
      
       return `
       <section class="pro-details">
       <div class="img-slider">
       <img src="${product.image}" class="present" alt="">

           <!-- <div class="all-images">
               <img src="img/product image 1.png" class="present" alt="">
               <img src="img/product image 2.png" class="p2" alt="">
               <img src="img/product image 3.png" class="p3" alt="">
               <img src="img/product image 4.png" class="p4" alt="">

           </div> -->
       </div>
       <div class="detials">
           <h2 class="brand-name"> ${product.brand}</h2>
           <p class="short-descrip">"${product.description}"</p>
           <h3 class="pro-det-list">product details</h3>
           <ul class="the-list">
               <li class="items">material: cotton</li>
               <li class="items">type: basic</li>
               <li class="items">color: green</li>
               <li class="items">wash: hand-wash</li>

           </ul>
           <div class="pricesall">
               <span class="dprice">Rs ${product.sellingPrice}</span>
               <span class="aprice">Rs ${product.actualPrice}</span>
               <span class="the-discount">( 50% )</span>
         
           </div>
           <div class="size">
               <p class="select-size">select size</p>
               <select name="selectsize" id="" class="sizes">
                   <option selected disabled>Choose Here</option>
                   <option value="XS">XS</option>
                   <option value="S">S</option>
                   <option value="M">M</option>
                   <option value="L">L</option>
                   <option value="XL">XL</option>
               </select>
           </div>
           <div class="btnns">
               <button class="btn-wish cart-btn">add to cart</button>
               <button class="btn-wish">add to wishlist</button>
           </div>
           
            </div>
   </section>

<section class="products">
      
<h2 class="pro-cat">recommended</h2>
<span class="material-icons" id="left">
    arrow_back_ios
    </span>
<span class="material-icons" id="right">
    arrow_forward_ios
    </span>
    <div class="pro-row">
${images.map(
 (oneimage) =>`

 <a href="#/product/${oneimage._id}">
 <div class="pro-single">
 <div class="pro-img">
 <span class="discount">50% off</span>
 <img src="${oneimage.image}" class="pro-profile" alt="">
 <span class="material-icons" id="wishlist-btn">

     favorite_border
     </span>
</div>
<div class="pro-info">
 <h4 class="pro-brand">${oneimage.brand}</h4>
 <p class="pro-des">${oneimage.name}</p>
 <span class="pro-price">Rs ${oneimage.sellingPrice}</span>
 <span class="pro-actual-price">Rs ${oneimage.actualPrice}</span>
</div>
</div> 
</a>  

 `
)
.join('\n')}
</div> 
</section>

<section class="products">
      
<h2 class="pro-cat">recently visited</h2>
<span class="material-icons" id="left">
    arrow_back_ios
    </span>
<span class="material-icons" id="right">
    arrow_forward_ios
    </span>
    <div class="pro-row">
${images.map(
 (oneimage) =>`

 <a href="#/product/${oneimage._id}">
 <div class="pro-single">
 <div class="pro-img">
 <span class="discount">50% off</span>
 <img src="${oneimage.image}" class="pro-profile" alt="">
 <span class="material-icons" id="wishlist-btn">

     favorite_border
     </span>
</div>
<div class="pro-info">
 <h4 class="pro-brand">${oneimage.brand}</h4>
 <p class="pro-des">${oneimage.name}</p>
 <span class="pro-price">Rs ${oneimage.sellingPrice}</span>
 <span class="pro-actual-price">Rs ${oneimage.actualPrice}</span>
</div>
</div> 
</a>  

 `
)
.join('\n')}
</div> 
</section>
  
       `
    }
 
}
export default productPage;
// oneRow();
 
 
 
