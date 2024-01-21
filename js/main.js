'use strict'

const tabs = document.querySelectorAll('.hschtopisati');
const tabContent = document.querySelectorAll('.tabs');
const tabParent = document.querySelector('.menu-header');

function hide(){
    tabContent.forEach(item =>{
        item.style.display = "none";
    })
    tabs.forEach(item =>{
        item.classList.remove('current');
    })
}

function show(i=0){
    tabContent[i].style.display = "block";
    tabs[i].classList.add('current');
}

hide();
show();

tabParent.addEventListener('click',(event)=>{
    if(event.target && event.target.classList.contains('hschtopisati')){
        tabs.forEach((item,i)=>{
            if(event.target == item){
                hide();
                show(i);
            }
        })
    }
});
console.log(tabContent);


//slidd
const slides = document.querySelectorAll('.swiper-slide'),
prev = document.querySelector('.ec-button-prev'),
next = document.querySelector('.ec-button-next');
console.log(slides);
let slideIndex = 1;

function showSlides(n){
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    slides.forEach(item=> item.style.display="none");
    slides[slideIndex-1].style.display ="block";

}
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex = slideIndex+n);
}
next.addEventListener('click',()=>{
    plusSlides(1)
})
prev.addEventListener('click',()=>{
    plusSlides(-1)
})

//sliderr
const slidestwo = document.querySelectorAll('.slide-two'),
prev2 = document.querySelector('.tc-button-prev'),
next2 = document.querySelector('.tc-button-next');

let slideIndex2 = 1;

function showSlides1(n){
    if(n>slidestwo.length){
        slideIndex2 = 1;
    }
    if(n<1){
        slideIndex2 = slidestwo.length;
    }
    slidestwo.forEach(item=> item.style.display="none");
    slidestwo[slideIndex2-1].style.display="block";

   
}
showSlides1(slideIndex2);

function plusSlides1(n){
    showSlides1(slideIndex2 = slideIndex2+n);
}
next.addEventListener('click',()=>{
    plusSlides1(1)
})
prev.addEventListener('click',()=>{
    plusSlides1(-1)
})