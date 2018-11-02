function modalPopupConsultation() {
    let buttonConsultation = document.querySelectorAll('.button-consultation'),
        modal = document.querySelector('.popup-consultation'),
        close = modal.querySelector('.popup-close'), 
        popupGift = document.querySelector('.popup-gift'),
        modalPopopDesign = document.querySelector('.popup-design');

    buttonConsultation.forEach(function (elem) {
        elem.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    modal.addEventListener('click', ()=> {
        if(!event.target.closest('.popup-content')) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }        
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    function modalWindow() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        if(popupGift.style.display == 'block' || modalPopopDesign.style.display == 'block') {
            modal.style.display = 'none';
            clearTimeout(timer);
        } 
    }

    let timer = setTimeout(function run() {
        modalWindow();
        setTimeout(run, 60000);
    }, 60000);

}

export default modalPopupConsultation;