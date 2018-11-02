function giftModal() {
    let giftBtn = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift'),
        close = popupGift.querySelector('.popup-close'),
        toDeleteGiftBtn = document.querySelector('.infinite');

    giftBtn.addEventListener('click', ()=> {
        popupGift.style.display = 'block';
        document.body.style.overflow = 'hidden';
        toDeleteGiftBtn.classList.remove('fixed-gift');
    });

    popupGift.addEventListener('click', ()=> {
        if(!event.target.closest('.popup-content')) {
            popupGift.style.display = 'none';
            document.body.style.overflow = '';
        }        
    });

    close.addEventListener('click', () => {
        popupGift.style.display = 'none';
        document.body.style.overflow = '';
    });
}

export default giftModal; 