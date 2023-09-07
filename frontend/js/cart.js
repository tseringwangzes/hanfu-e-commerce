import { getProduct } from "./api.js";
import { getcartitems, setcartitems } from "./storage.js";
import {rerender, theUrl} from './utils.js';

const addTocart = (item, forceUpdate = false)=>{
let cartitems = getcartitems();
const alreadyexist = cartitems.find(x => x.product === item.product);
if(alreadyexist){
    if(forceUpdate){
        cartitems = cartitems.map((x) => x.product === alreadyexist.product? item: x);
    }
} else{
    cartitems = [...cartitems, item];
}
setcartitems(cartitems);
if(forceUpdate){
    rerender(cart);
}
}

const removefromcart = (id) =>{
    setcartitems(getcartitems().filter((x) => x.product !== id));
     if(id === theUrl().id){
         document.location.hash = '/cart';
     } else{
         rerender(cart);
     }
}

const cart = {
    after_render: () =>{
        const qtyselect = document.getElementsByClassName("qty");
        Array.from(qtyselect).forEach((qty)=>{
            qty.addEventListener('change',(e)=>{
                const item= getcartitems().find((x)=>x.product === qty.id);
                addTocart({...item, qty: Number(e.target.value)},true);
            });
        });
        const deletebtn = document.getElementsByClassName("dlt");
        Array.from(deletebtn).forEach((dltbtn)=>{
            dltbtn.addEventListener('click', ()=>{            
                removefromcart(dltbtn.id);
            });
        });
        document.getElementById("check-out-btn").addEventListener('click', ()=>{
            document.location.hash = '/signin';
        })
    },
    render: async () => {
         const request = theUrl();
        
        if(request.id){
            const product = await getProduct(request.id);
            addTocart({
                product: product._id,
                name: product.name,
                image: product.image,
                sp: product.sellingPrice,
                qty: 1,
            })
        }
        const cartitems=getcartitems();
        console.log(cartitems)
        return(
            `
            <div class="carthome">
             <div class="cart-items">
                <ul class="c-i-container">
                    <li>
                        <h3 class="heading">Your Items</h3>
                    </li>
                    ${
                        cartitems.length === 0?
                        `<div>cart is empty. <a href="/#/">shop more</a></div>`:
                        cartitems.map(item => `
                        <li> 
                        
                        <div class ="cart-one">
                            <div class="cart-img">
                            <a href="/#/product/${item.product}">
                                <img src="${item.image}" alt=""> 
                            </a>
                            </div>
                        <div class= "cart-details">
                            
                            <div class="cart-name">
                                
                                    ${item.name}
                              
                            </div>
                           
                            <div>
                            Qty: <select name="" id="${item.product}" class="qty">
                                ${[...Array(10).keys()].map((x)=>
                                    item.qty === x+1
                                    ? ` <option selected value="${x+1}">${x+1}</option> `
                                    : ` <option value="${x+1}">${x+1}</option> `
                                    )}
                              
                            </select>
                           <button type="button" class="dlt" id="${item.product}">delete</button>
                           </div>
                        </div>
                      <div class="cart-price">
                           Rs ${item.sp}
                       </div>
                     
                    </div>
                    
            
                        </li>
                        `).join('\n')
                    }
                    
                </ul>
             
            </div>
            <div class ="total-n-checkout">
            <h3 class="subtotal"> Subtotal (${cartitems.reduce((a,c) => a+ c.qty,0)} items) :
            Rs ${cartitems.reduce((a,c) => a+ c.sp * c.qty, 0)}
            </h3>
            <button id="check-out-btn" class = "proceed">
            checkout 
            </button>
           </div>
            
                </div>
            `
        )
    },

};
export default cart;

