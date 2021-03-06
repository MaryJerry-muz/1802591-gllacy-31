let sliderControls = document.querySelectorAll('.slider-control');
let slides = document.querySelectorAll('.slider-item');
let slideWrapper = document.querySelector('.site-wrapper');

sliderControls.forEach((control, index) => {
  control.addEventListener('click', () => {
    sliderControls.forEach((subControl, subIndex) => {
      if (subControl.classList.contains('active')) {
        subControl.classList.remove('active');
        slides[subIndex].classList.remove('active-slide');
        let oldWrapperIndex = subIndex + 1;
        slideWrapper.classList.remove('site-wrapper-' + oldWrapperIndex);
      }
    });
    
    sliderControls[index].classList.add('active');
    slides[index].classList.add('active-slide');

    let currentWrapperIndex = index + 1;
    slideWrapper.classList.add('site-wrapper-' + currentWrapperIndex);
  });
});