const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check if there is a next sibling slide
    if(current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('current')
    } else {
        //otherwise pass it to the first child
        slides[0].classList.add('current');
    }
   setTimeout(() => {
       current.classList.remove('current');
   }, 2000);
}
const prevSlide = () => {
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check if there is a prev sibling slide
    if(current.previousElementSibling) {
        //add current to prev sibling
        current.previousElementSibling.classList.add('current')
    } else {
        //otherwise pass it to the last child
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => {
        current.classList.remove('current');
    }, 2000);
}

next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})
prev.addEventListener('click', e => {
    prevSlide();
})

//auto slide

if(auto) {
    //run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}