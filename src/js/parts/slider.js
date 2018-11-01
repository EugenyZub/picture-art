function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.main-slider-item');
        
    showSlides(slideIndex);
    
    function showSlides(n) {

        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item)=> {
            item.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';

    }
    
    setTimeout(function run() {
        showSlides(slideIndex += 1); 
        setTimeout(run, 3000);
      }, 3000);
}

export default slider;