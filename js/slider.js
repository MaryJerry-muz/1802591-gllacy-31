let sliderControls = document.querySelectorAll('.slider-control');
let slides = document.querySelectorAll('.slider-item');
let slideWrapper = document.querySelector('.site-wrapper');

sliderControls[0].onclick = function() {
  for (let controls of sliderControls) {
  		controls.classList.remove('active');
  }

  sliderControls[0].classList.add('active');

  for (let slide of slides) {
  		slide.classList.remove('active-slide');
  }

  slides[0].classList.add('active-slide');

  slideWrapper.classList.remove('site-wrapper-2');
  slideWrapper.classList.remove('site-wrapper-3');
  slideWrapper.classList.add('site-wrapper-1');
};


sliderControls[1].onclick = function() {
  for (let controls of sliderControls) {
  		controls.classList.remove('active');
  }

  sliderControls[1].classList.add('active');

  for (let slide of slides) {
  		slide.classList.remove('active-slide');
  }

  slides[1].classList.add('active-slide');

  slideWrapper.classList.add('site-wrapper-2');
  slideWrapper.classList.remove('site-wrapper-1');
  slideWrapper.classList.remove('site-wrapper-3');
};


sliderControls[2].onclick = function() {
  for (let controls of sliderControls) {
  		controls.classList.remove('active');
  }

  sliderControls[2].classList.add('active');

  for (let slide of slides) {
  		slide.classList.remove('active-slide');
  }

  slides[2].classList.add('active-slide');

  slideWrapper.classList.remove('site-wrapper-1');
  slideWrapper.classList.remove('site-wrapper-2');
  slideWrapper.classList.add('site-wrapper-3');
};