function modalPopupConsultation() {
    let buttonDesign = document.querySelectorAll('.button-consultation'),
        modal = document.querySelector('.popup-consultation'), //подложка
        close = modal.querySelector('.popup-close'); // кнопка закрыть

    buttonDesign.forEach(function (elem) {
        elem.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    modal.addEventListener('click', function () {
        if(!event.target.closest('.popup-content')) {
            modal.style.display = 'none';
        }        
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

export default modalPopupConsultation;