import homescreen from './homeScreen.js';
import product from './product.js';
import {theUrl} from './utils.js';
import Error404Screen from './errorscreen.js';
import cart from './cart.js';
import signin from './signin.js';
import register from './register.js';

const routes = {
     '/': homescreen,
     '/product/:id': product,
     '/cart/:id': cart,
     '/cart': cart,
     '/signin': signin,
     '/register': register    
};

const router = async () => {

    const request = theUrl();
    console.log( request.resource);
    const parseUrl = 
    (request.resource ? `/${request.resource}`: '/') + 
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
    const screen  = routes[parseUrl]? routes[parseUrl] : Error404Screen;
    // let single=document.querySelector('.pro-row');
    let main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    await screen.after_render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange',router);