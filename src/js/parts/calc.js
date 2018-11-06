// Начальная цена за картину размером 40х50:  1000,
//                                    50х70:  1500, 
//                                    70х70:  2000, 
//                                    70х100: 2500;
// Материалы: волокно: + 1500, 
//            лён:     + 3000, 
//            хлопок:  + 4500;
// Доп.услуги: арт-гель: + 1000
//             экспресс: + 2000
//             доставка: + 1500
function calc() {
    let picturePrice = 1000,
        materialPrice = 1500,
        artGel = 1000,
        express = 2000,
        delivery = 1500,

        size = document.querySelector('#size'),
        material = document.getElementById('material'),
        options = document.getElementById('options'),
        promocode = document.querySelector('.promocode'),

        finalPrice = document.querySelector('.calc-price'),
        buttonCalcPrice = document.querySelector('#price');
    
    let currentSizeSelect = size.selectedIndex;
    let curentMaterialSelect = material.selectedIndex;
    let curentOptionsSelect = options.selectedIndex;

    size.addEventListener('click', ()=> {
        currentSizeSelect = size.selectedIndex;//size.options[size.selectedIndex];
        sizeSelect(currentSizeSelect, curentMaterialSelect, curentOptionsSelect); 
    });

    material.addEventListener('click', ()=> { 
        curentMaterialSelect = material.selectedIndex;
        sizeSelect(currentSizeSelect, curentMaterialSelect, curentOptionsSelect);
    });

    options.addEventListener('click', ()=> { 
        curentOptionsSelect = options.selectedIndex;
        sizeSelect(currentSizeSelect, curentMaterialSelect, curentOptionsSelect);
    });

//IWANTPOPART
    function sizeSelect(selected1, selected2, selected3) {
        console.log(`${currentSizeSelect} ${curentMaterialSelect} ${curentOptionsSelect} ${promocode.value}`);
        //------------------------------------------------------------------------
        if ((selected1 == 0 && selected2 == 0 && selected3 == 0 && promocode.value == 'IWANTPOPART') ||
            (selected1 == 0 && selected2 != 0 && selected3 == 0 && promocode.value == 'IWANTPOPART') ||
            (selected1 != 0 && selected2 == 0 && selected3 == 0 && promocode.value == 'IWANTPOPART') ) {
            finalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины'; 
            console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${selected3} = ${finalPrice.textContent}`);
        } else if ((selected1 == 0 && selected2 == 0 && selected3 == 1 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 0 && selected2 != 0 && selected3 == 1 && promocode.value == 'IWANTPOPART') ||
                   (selected1 != 0 && selected2 == 0 && selected3 == 1 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';     
            console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${selected3} = ${finalPrice.textContent}`);
        } else if ((selected1 == 0 && selected2 == 0 && selected3 == 2 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 0 && selected2 != 0 && selected3 == 2 && promocode.value == 'IWANTPOPART') ||
                   (selected1 != 0 && selected2 == 0 && selected3 == 2 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины'; 
            console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${selected3} = ${finalPrice.textContent}`);
        } else if ((selected1 == 0 && selected2 == 0 && selected3 == 3 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 0 && selected2 != 0 && selected3 == 3 && promocode.value == 'IWANTPOPART') ||
                   (selected1 != 0 && selected2 == 0 && selected3 == 3 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
            console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${selected3} = ${finalPrice.textContent}`);
        }
        //-------------------------------------------------------------------------

        //-------------------------------------------------------------------------
        if ((selected1 == 2 && selected2 == 1 && selected3 == 0 && promocode.value == 'IWANTPOPART') ||
            (selected1 == 2 && selected2 == 2 && selected3 == 0 && promocode.value == 'IWANTPOPART') ||
            (selected1 == 2 && selected2 == 3 && selected3 == 0 && promocode.value == 'IWANTPOPART')) { 
            finalPrice.textContent = (picturePrice * 1.5 + materialPrice * selected2) * 0.7; 
            console.log(`${picturePrice} * 1.5 + ${materialPrice} * ${selected2} = ${finalPrice.textContent}`);  
        } else if ((selected1 == 2 && selected2 == 1 && selected3 == 1 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 2 && selected2 == 2 && selected3 == 1 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 2 && selected2 == 3 && selected3 == 1 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = (picturePrice * 1.5 + materialPrice * selected2 + artGel) * 0.7; 
            console.log(`${picturePrice} * 1.5 + ${materialPrice} * ${selected2} + ${artGel} = ${finalPrice.textContent}`);
        } else if ((selected1 == 2 && selected2 == 1 && selected3 == 2 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 2 && selected2 == 2 && selected3 == 2 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 2 && selected2 == 3 && selected3 == 2 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = (picturePrice * 1.5 + materialPrice * selected2 + express) * 0.7; 
            console.log(`${picturePrice} * 1.5 + ${materialPrice} * ${selected2} + ${express} = ${finalPrice.textContent}`);
        } else if ((selected1 == 2 && selected2 == 1 && selected3 == 3 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 2 && selected2 == 2 && selected3 == 3 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 2 && selected2 == 3 && selected3 == 3 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = (picturePrice * 1.5 + materialPrice * selected2 + delivery) * 0.7;
            console.log(`${picturePrice} * 1.5 + ${materialPrice} * ${selected2} + ${delivery} = ${finalPrice.textContent}`);
        }
        //-------------------------------------------------------------------------
        if ((selected1 == 3 && selected2 == 1 && selected3 == 0 && promocode.value == 'IWANTPOPART') ||
            (selected1 == 3 && selected2 == 2 && selected3 == 0 && promocode.value == 'IWANTPOPART') ||
            (selected1 == 3 && selected2 == 3 && selected3 == 0 && promocode.value == 'IWANTPOPART')) { 
            finalPrice.textContent = (picturePrice * 2 + materialPrice * selected2) * 0.7; 
            console.log(`${picturePrice} * 2 + ${materialPrice} * ${selected2} = ${finalPrice.textContent}`);   
        } else if ((selected1 == 3 && selected2 == 1 && selected3 == 1 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 3 && selected2 == 2 && selected3 == 1 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 3 && selected2 == 3 && selected3 == 1 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = (picturePrice * 2 + materialPrice * selected2 + artGel) * 0.7; 
            console.log(`${picturePrice} * 2 + ${materialPrice} * ${selected2} + ${artGel} = ${finalPrice.textContent}`);
        } else if ((selected1 == 3 && selected2 == 1 && selected3 == 2 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 3 && selected2 == 2 && selected3 == 2 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 3 && selected2 == 3 && selected3 == 2 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = (picturePrice * 2 + materialPrice * selected2 + express) * 0.7; 
            console.log(`${picturePrice} * 2 + ${materialPrice} * ${selected2} + ${express} = ${finalPrice.textContent}`);
        } else if ((selected1 == 3 && selected2 == 1 && selected3 == 3 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 3 && selected2 == 2 && selected3 == 3 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 3 && selected2 == 3 && selected3 == 3 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = (picturePrice * 2 + materialPrice * selected2 + delivery) * 0.7; 
            console.log(`${picturePrice} * 2 + ${materialPrice} * ${selected2} + ${delivery} = ${finalPrice.textContent}`);
        }
        //-------------------------------------------------------------------------
        if ((selected1 == 4 && selected2 == 1 && selected3 == 0 && promocode.value == 'IWANTPOPART') ||
            (selected1 == 4 && selected2 == 2 && selected3 == 0 && promocode.value == 'IWANTPOPART') ||
            (selected1 == 4 && selected2 == 3 && selected3 == 0 && promocode.value == 'IWANTPOPART')) { 
            finalPrice.textContent = (picturePrice * 2.5 + materialPrice * selected2) * 0.7; 
            console.log(`${picturePrice} * 2.5 + ${materialPrice} * ${selected2} = ${finalPrice.textContent}`);              
        } else if ((selected1 == 4 && selected2 == 1 && selected3 == 1 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 4 && selected2 == 2 && selected3 == 1 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 4 && selected2 == 3 && selected3 == 1 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = (picturePrice * 2.5 + materialPrice * selected2 + artGel) * 0.7; 
            console.log(`${picturePrice} * 2.5 + ${materialPrice} * ${selected2} + ${artGel} = ${finalPrice.textContent}`);
        } else if ((selected1 == 4 && selected2 == 1 && selected3 == 2 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 4 && selected2 == 2 && selected3 == 2 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 4 && selected2 == 3 && selected3 == 2 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = (picturePrice * 2.5 + materialPrice * selected2 + express) * 0.7; 
            console.log(`${picturePrice} * 2.5 + ${materialPrice} * ${selected2} + ${express} = ${finalPrice.textContent}`);
        } else if ((selected1 == 4 && selected2 == 1 && selected3 == 3 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 4 && selected2 == 2 && selected3 == 3 && promocode.value == 'IWANTPOPART') ||
                   (selected1 == 4 && selected2 == 3 && selected3 == 3 && promocode.value == 'IWANTPOPART')) {
            finalPrice.textContent = (picturePrice * 2.5 + materialPrice * selected2 + delivery) * 0.7; 
            console.log(`${picturePrice} * 2.5 + ${materialPrice} * ${selected2} + ${delivery} = ${finalPrice.textContent}`);
        }
        //-------------------------------------------------------------------------

        if (selected1 == 1) {
            if ( selected2 == 1) {
                if (selected3 == 0) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2;
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${selected3} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${selected3}) * 0.7 = ${finalPrice.textContent}`);
                    }
                } else if (selected3 == 1) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2 + artGel;
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${artGel} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + artGel) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${artGel}) * 0.7 = ${finalPrice.textContent}`);
                    }
                } else if (selected3 == 2) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2 + express; 
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${express} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + express) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${express}) * 0.7 = ${finalPrice.textContent}`);
                    }
                } else if (selected3 == 3) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2 + delivery; 
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${delivery} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + delivery) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${delivery}) * 0.7 = ${finalPrice.textContent}`);
                    }
                }
            } else if (selected2 == 2) {
                if (selected3 == 0) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2;
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${selected3} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + selected3) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${selected3} = ${finalPrice.textContent}`);
                    }
                } else if (selected3 == 1) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2 + artGel;
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${artGel} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + artGel) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${artGel}) * 0.7 = ${finalPrice.textContent}`);
                    }
                } else if (selected3 == 2) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2 + express; 
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${express} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + express) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${express}) * 0.7 = ${finalPrice.textContent}`);
                    }
                } else if (selected3 == 3) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2 + delivery; 
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${delivery} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + delivery) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${delivery}) * 0.7 = ${finalPrice.textContent}`);
                    }
                }
            } else if (selected2 == 3) {
                if (selected3 == 0) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2;
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${selected3} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + selected3) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${selected3}) * 0.7 = ${finalPrice.textContent}`);
                    }
                } else if (selected3 == 1) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2 + artGel;
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${artGel} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + artGel) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${artGel}) * 0.7 = ${finalPrice.textContent}`);
                    }
                } else if (selected3 == 2) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2 + express; 
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${express} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + express) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${express}) * 0.7 = ${finalPrice.textContent}`);
                    }
                } else if (selected3 == 3) {
                    finalPrice.textContent = picturePrice + materialPrice * selected2 + delivery; 
                    console.log(`${picturePrice} + ${materialPrice} * ${selected2} + ${delivery} = ${finalPrice.textContent}`);
                    if(promocode.value == 'IWANTPOPART') {
                        finalPrice.textContent = (picturePrice + materialPrice * selected2 + delivery) * 0.7;
                        console.log(`(${picturePrice} + ${materialPrice} * ${selected2} + ${delivery}) * 0.7 = ${finalPrice.textContent}`);
                    }
                }
            }
        }
        //-----------------------------------------------------------------------------------------------
    }
}

export default calc;