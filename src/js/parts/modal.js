function modal() {
    let buttonOrder = document.querySelectorAll('.button-order');
    let modal= document.querySelector('.popup-design');
    console.log(buttonOrder);

    buttonOrder.addEventListener('click', ()=> {
        modal.display.style = 'block';
    });
    

}

export default modal;