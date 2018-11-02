function giftModal() {
    let giftBtn = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift'),
        close = popupGift.querySelector('.popup-close');

    giftBtn.addEventListener('click', ()=> {
        popupGift.style.display = 'block';
        document.body.style.overflow = 'hidden';
        giftBtn.parentNode.removeChild(giftBtn);
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