let state = 1;
const duration = 2;
const elements = document.querySelectorAll('.carousel1--wrapper img').length;
let carouselWidth = document.getElementById('carousel1').offsetWidth;
let carouselWidth2 = document.getElementById('carousel2').offsetWidth;

function correctWrappersSize(){
    carouselWidth = document.getElementById('carousel1').offsetWidth;
    carouselWidth2 = document.getElementById('carousel2').offsetWidth;
    document.querySelectorAll('.carousel1--wrapper img')[state-1].style.left = 0;
}

window.onresize = correctWrappersSize;

function moveToRight(){
    
    if (state != 1) {
        gsap.to('.carousel1--wrapper img', {x: carouselWidth*(state-2), duration: duration,ease: "power4.inOut"});
        gsap.to('.carousel2--wrapper img', {x: carouselWidth2*(state-2), duration: duration,ease: "power4.inOut"});
        state--;
    }

    disableButtons();
}

function moveToLeft(){

    if (state < elements) {
        gsap.to('.carousel1--wrapper img', {x: - carouselWidth*state, duration: duration,ease: "power4.inOut"});
        gsap.to('.carousel2--wrapper img', {x: - carouselWidth2*state, duration: duration,ease: "power4.inOut"});
        state++;
    }

    disableButtons();
}

function disableButtons(){
    if(state === 1){
        let btn = document.getElementsByClassName('right_arrow');
        for (let i = 0; i < btn.length; i++) {btn[i].style.filter = 'invert(86%) sepia(3%) saturate(4%) hue-rotate(323deg) brightness(87%) contrast(90%)'; }

        let btn2 = document.getElementsByClassName('left_arrow');
        for (let i = 0; i < btn2.length; i++) {btn2[i].style.filter = 'invert(0%) sepia(2%) saturate(15%) hue-rotate(344deg) brightness(103%) contrast(100%)'; }
    }else if(state === elements){
        let btn = document.getElementsByClassName('left_arrow');
        for (let i = 0; i < btn.length; i++) {btn[i].style.filter = 'invert(86%) sepia(3%) saturate(4%) hue-rotate(323deg) brightness(87%) contrast(90%)'; }

        let btn2 = document.getElementsByClassName('right_arrow');
        for (let i = 0; i < btn2.length; i++) {btn2[i].style.filter = 'invert(0%) sepia(2%) saturate(15%) hue-rotate(344deg) brightness(103%) contrast(100%)'; }
    }else{
        let btn = document.querySelectorAll('button img');
        for (let i = 0; i < btn.length; i++) {btn[i].style.filter = 'invert(0%) sepia(2%) saturate(15%) hue-rotate(344deg) brightness(103%) contrast(100%)'; }
    }
}

disableButtons();