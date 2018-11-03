function menu() {
    let burgerMenu = document.querySelector('.burger'),
        burgerMenuUl = document.querySelector('#burger-menu'); 
   
    if(document.documentElement.clientWidth <= 768) {
        burgerMenu.addEventListener('click', ()=> {
            if(burgerMenuUl.style.display == 'block') {
                burgerMenuUl.style.display = 'none';
            } else {
                burgerMenuUl.style.display = 'block';
            }
        });
    } else {
        burgerMenuUl.style.display = 'none';
    }
    
    window.addEventListener("orientationchange", function() {
        burgerMenu.addEventListener('click', ()=> {
            if(burgerMenuUl.style.display == 'block' && document.documentElement.clientWidth <= 768) {
                burgerMenuUl.style.display = 'none';
            } else if (document.documentElement.clientWidth <= 768){
                burgerMenuUl.style.display = 'block';
            } else {
                burgerMenuUl.style.display = 'none';
            }
        });
    });
}

export default menu;