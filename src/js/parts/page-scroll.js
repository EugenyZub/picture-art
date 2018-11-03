function scroll() {
    let popupGift = document.querySelector('.popup-gift'),
        giftBtn = document.querySelector('.fixed-gift'),
        close = popupGift.querySelector('.popup-close');

    let counter = true;
    
    window.addEventListener('scroll', ()=> {
        let scrolled = document.documentElement.scrollTop;
        let allHeight;
        if ( window.innerWidth < 718 || document.documentElement.scrollWidth < 718 ) {
            allHeight = document.documentElement.scrollHeight - 738;
        }

        if ( window.innerWidth >= 718 && window.innerWidth < 1200 || document.documentElement.scrollWidth >= 718 && window.innerWidth < 1200 ) {
            allHeight = document.documentElement.scrollHeight - 754;
        }

        if (window.innerWidth >= 1200 && document.documentElement.scrollWidth < 1310) {
            allHeight = document.documentElement.scrollHeight - 738;
        }

        if( document.documentElement.scrollWidth >= 1310) {
            allHeight = document.documentElement.scrollHeight - 770;
        }

        scrolled = Math.round(scrolled * 100) / 100;

        if (counter) {
            if(scrolled >= allHeight) {
                counter = false;
                popupGift.style.display = 'block';
                document.body.style.overflow = 'hidden';
                giftBtn.parentNode.removeChild(giftBtn);  
            }
        }   
    });

    popupGift.addEventListener('click', ()=> {
        if(!event.target.closest('.popup-content')) {
            popupGift.style.display = 'none';
            document.body.style.overflow = '';                 
            counter = false;
        }        
    });

    close.addEventListener('click', () => {
        popupGift.style.display = 'none';
        document.body.style.overflow = '';
        counter = false;
    });
}

export default scroll;
