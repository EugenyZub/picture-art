function modalPopupDesign() {
    let buttonDesign = document.querySelectorAll('.button-design'),
        modal = document.querySelector('.popup-design'),
        close = modal.querySelector('.popup-close');

    buttonDesign.forEach(function (elem) {
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

export default modalPopupDesign;