const topmenu =()=>{
    let nav=document.querySelector('.navbar');

    nav.innerHTML=`
    <div class="navele">
        
    <div class="other-ele">
        <img src="img/dark-logo.png" class="main-logo" alt="siteLogo">

        <ul class="menu">
            <li class="menu-item"><a href="#" class="menu-link">home</a></li>
            <li class="menu-item"><a href="#" class="menu-link">women</a></li>
            <li class="menu-item"><a href="#" class="menu-link">men</a></li>
            <li class="menu-item"><a href="#" class="menu-link">kids</a></li>
            <li class="menu-item"><a href="#" class="menu-link">new arrivals</a></li>

        </ul>
       
            <div class="search">
                <input type="text" class="the-box" placeholder="search">
                <i class="material-icons" id="search-btn">search</i>
                <!-- <button class="search-btn">search</button> -->
                <a href="/#/cart"><img src="img/user.png" alt=""></a>
                <a href="/#/cart"><img src="img/cart.png" alt=""></a>
         
           </div>
      
    </div>
</div>

    `;
}

topmenu();