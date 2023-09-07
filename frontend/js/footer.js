const footer = () =>{
    let footerbe = document.querySelector('footer');

    footerbe.innerHTML = `
    <div class="footer-last">
    <img src="img/footerImg.png" alt="" class="footer-img">
    <div class="contacts">
        <h3 class="con-us">feel free to contact us :)</h3>
        <ul class="types">
            <li class="con">1234567890</li>
            <li class="con">0987654321</li>
            <li class="con">shophere@gmail.com</li>
        </ul>
    </div>
</div>
    `;
}
footer();