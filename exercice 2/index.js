const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideItems.length;
    showSlide(currentIndex);
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
    showSlide(currentIndex);
}

setInterval(()=>{
    showNextSlide()
},2000)
prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);
