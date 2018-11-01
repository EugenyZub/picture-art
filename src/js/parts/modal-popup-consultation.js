function modalPopupConsultation() {
    let buttonConsultation = document.querySelectorAll('.button-consultation'),
        modal = document.querySelector('.popup-consultation'),
        close = modal.querySelector('.popup-close'); 

    buttonConsultation.forEach(function (elem) {
        elem.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    modal.addEventListener('click', ()=> {
        if(!event.target.closest('.popup-content')) {
            modal.style.display = 'none';
        }        
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

export default modalPopupConsultation;