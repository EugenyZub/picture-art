function modalPopupConsultation() {
    let buttonConsultation = document.querySelectorAll('.button-consultation'),
        modal = document.querySelector('.popup-consultation'),
        close = modal.querySelector('.popup-close'); 

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
}

export default modalPopupConsultation;