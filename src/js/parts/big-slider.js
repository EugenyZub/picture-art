function bigSlider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');

    showFeedbackSlides(slideIndex);

    function showFeedbackSlides(n) {

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

    function plusSlides(n) {
        showFeedbackSlides(slideIndex += n);
    }

    prev.addEventListener('click', ()=> {
        plusSlides(-1);
    });

    next.addEventListener('click', ()=> {
        plusSlides(1);
    });

    setTimeout(function run() {
        showFeedbackSlides(slideIndex += 1); 
        setTimeout(run, 20000);
    }, 20000);
}

export default bigSlider;