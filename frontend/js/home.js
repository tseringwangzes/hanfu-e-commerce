const proRow=[...document.querySelectorAll('.pro-row')];
const left = [...document.querySelectorAll('#left')];
const right = [...document.querySelectorAll('#right')];
const proSingle= document.querySelector('.pro-row');
console.log(proRow);
let eachImageDimentions = proSingle.getBoundingClientRect();
console.log(eachImageDimentions);

proRow.forEach((item,i)=>{
    let eachImageWidth = eachImageDimentions.width;
    left[i].addEventListener('click', ()=>{
        item.scrollLeft -= (eachImageWidth+26);
    })
    right[i].addEventListener('click', ()=>{
        item.scrollLeft += (eachImageWidth+26);
    })
})