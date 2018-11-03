function resizePictures() {
    let size1 = document.querySelector('.size-1'),
        size2 = document.querySelector('.size-2'),
        size3 = document.querySelector('.size-3'),
        size4 = document.querySelector('.size-4');

    changePicture(size1, 'size1', '-1-1', '-1');
    changePicture(size2, 'size2', '-2-1', '-2');
    changePicture(size3, 'size3', '-3-1', '-3');
    changePicture(size4, 'size4', '-4-1', '-4');

    function changePicture(size, pictNumber , newValue, oldValue) {
        let curentSize = document.querySelector(`#${pictNumber} .size`),
            startingPrice = document.querySelector(`#${pictNumber} .starting-price`),
            finalPrice = document.querySelector(`#${pictNumber} .final-price`);

        size.addEventListener('mouseenter', ()=> {
            size.setAttribute('src', `img/sizes${newValue}.png`);
            curentSize.style.display = 'none';
            startingPrice.style.display = 'none';
            finalPrice.style.display = 'none';
        });

        size.addEventListener('mouseleave', ()=> {
            size.setAttribute('src', `img/sizes${oldValue}.png`);
            curentSize.style.display = 'block';
            startingPrice.style.display = 'block';
            finalPrice.style.display = 'block';
        });
    }
}

export default resizePictures;