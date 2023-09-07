// import data from './data.js';
//console.log({data});

// let images=["img/card1.png","img/card2.png","img/card3.png","img/card4.png","img/card5.png","img/card6.png","img/card7.png"];
const homeScreen = {
    render: async () => {
        //  const images = data;
        const response  = await fetch('http://localhost:5000/api/products', {
            headers:{
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok){
            return `<div> Error in getting data</div>`;
        }
        const images = await response.json();
        console.log(images);
       
      
       return `
       <header class="home-head">
       <div class="home-content">
           <img src="img/light-logo.png" class="home-logo" alt="">
           <p class="home-title">Get the best of all!</p>
       </div>
   </header>
       <section class="products">
      
       <h2 class="pro-cat">Trending</h2>
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
 
<section class="collection-all">
<a href="#" class="single-collection">
    <img src="img/women-collection.png" alt="">
    <p class="collec-title">sale</p>
</a>
<a href="#" class="single-collection">
    <img src="img/men-collection.png" alt="">
    <p class="collec-title">summer vibes</p>
</a>
<a href="#" class="single-collection">
    <img src="img/women.png" alt="">
    <p class="collec-title">women</p>
</a>
<a href="#" class="single-collection">
    <img src="img/men.png" alt="">
    <p class="collec-title">men</p>
</a>
<a href="#" class="single-collection">
    <img src="img/kids.png" alt="">
    <p class="collec-title">Kids</p>
</a>

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
export default homeScreen;
// oneRow();
 
 
 
