function moreStyles() {
    let buttonStyles = document.querySelector('.button-styles'),
        newStyles = document.querySelectorAll('.styles-2');
    
    buttonStyles.addEventListener('click', ()=> {
        newStyles.forEach( function(elem) {
            elem.style.display = 'block';

            elem.classList.remove('hidden-lg');
            elem.classList.remove('hidden-md');
            elem.classList.remove('hidden-sm');
            elem.classList.remove('hidden-xs');

            elem.classList.add('col-sm-3');
            elem.classList.add('col-sm-offset-0');
            elem.classList.add('col-xs-10');
            elem.classList.add('col-xs-offset-1');
        });

        buttonStyles.style.display = 'none';
    });
}

export default moreStyles;