export const getcartitems = () =>{
    const cartitems = localStorage.getItem('cartitems')?
    JSON.parse(localStorage.getItem('cartitems')): 
    [];
    return cartitems;
};
export const setcartitems = (cartitems) =>{
    localStorage.setItem('cartitems', JSON.stringify(cartitems));
    // localStorage.clear();
}