let slider          = document.querySelector('.slider');
let container       = document.querySelector('.slider__container');
let slidesWrapper   = document.querySelector('.slider__slides-wrapper');
let slides          = document.querySelectorAll('.slider__slide');
let btns            = document.querySelectorAll('.slider__btn');
let state           = 1;

let setState = () => {
    state = state == 1 ? 0 : 1;
}

let setDimension = () => {
    let width = slides.length * slider.getBoundingClientRect().width;
    slidesWrapper.style.width = width + 'px';
}

let setSlidesDimension = () => {
    let sliderWidth = slider.getBoundingClientRect().width;
    let slideWidth  = sliderWidth / 3;
    
    slides.forEach((slide) => {
        slide.style.width = slideWidth + 'px';
    });
}

let updateActiveSlide = () => {
    let secondSlide = slidesWrapper.children[1];

    slidesWrapper.children[2].dataset.active = 'false';
    slidesWrapper.children[0].dataset.active = 'false';

    secondSlide.dataset.active = 'true';
}

let sliderOpacityAnim = (callback) => {
    let timeLine = new TimelineMax();
    let timeForAnimate = 0.4;
    
    let fadeout = TweenMax.to(slidesWrapper, timeForAnimate, {
        opacity: 0
    });
    
    let fadein = TweenMax.to(slidesWrapper, timeForAnimate, {
        opacity: 1
    });

    let hideBtns = TweenMax.to(btns, 1, {
        opacity: 0
    });

    let showBtns = TweenMax.to(btns, 1, {
        opacity: 1
    });
    
    timeLine.add('start')
    timeLine.add(hideBtns, 'start');
    timeLine.add(fadeout, 'start');
    timeLine.add(callback)
    timeLine.add(fadein);
    timeLine.add(showBtns);
    timeLine.add(setState);

}

let moveforwrad = () => {
    sliderOpacityAnim(()=> {
        let firstSlide = slidesWrapper.children[0];
        slidesWrapper.appendChild( firstSlide);
        updateActiveSlide();
    });
}

let moveBack = () => {
    sliderOpacityAnim(()=> {
        let lastSlide = slidesWrapper.children[slidesWrapper.children.length - 1]
        slidesWrapper.insertBefore( lastSlide, slidesWrapper.children[0] );
        updateActiveSlide();    
    });
}

let moveHandler = (e) => {
    console.log(state)
    if ( state === 0) return;
    setState();    
    let btn = e.currentTarget;
    let btnDirection = btn.dataset.direction;
    
    switch (btnDirection) {
        case 'left':
            moveBack();
            break;
        case 'right':
            moveforwrad();
            break;
    }

}

let setSliderBtnsHandlers = () => {
    btns.forEach(btn => btn.addEventListener('click', moveHandler))
}


setDimension();
setSlidesDimension();
updateActiveSlide();
setSliderBtnsHandlers();

window.addEventListener('resize', setSlidesDimension);

//фарш батон одне яйце, цибуля, сіль перець паніровочні сухарі приправа для котлет, 10 овощів
// вимочити батон(2 скибки)
