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

        slides.forEach((item)=> item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function curentSlide(n) {
        showSlides(slideIndex = n);
    }


}

//export default slider;