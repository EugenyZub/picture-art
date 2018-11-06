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
    
        currentSizeSelect = size.selectedIndex,
        curentMaterialSelect = material.selectedIndex,
        curentOptionsSelect = options.selectedIndex,
        promoInput = promocode.value;

    size.addEventListener('click', ()=> {
        currentSizeSelect = size.selectedIndex;
        allSelect(currentSizeSelect, curentMaterialSelect, curentOptionsSelect, promoInput); 
    });

    material.addEventListener('click', ()=> { 
        curentMaterialSelect = material.selectedIndex;
        allSelect(currentSizeSelect, curentMaterialSelect, curentOptionsSelect, promoInput);
    });

    options.addEventListener('click', ()=> { 
        curentOptionsSelect = options.selectedIndex;
        allSelect(currentSizeSelect, curentMaterialSelect, curentOptionsSelect, promoInput);
    });

    promocode.addEventListener('input', ()=> {
        promoInput = promocode.value;
        allSelect(currentSizeSelect, curentMaterialSelect, curentOptionsSelect, promoInput);
    });

    //IWANTPOPART
    function allSelect(selected1, selected2, selected3, iputValue) {
        console.log(`${currentSizeSelect} ${curentMaterialSelect} ${curentOptionsSelect} ${iputValue}`);
        sizeSelected();

        function optionSelect(option, additionalOption, promo, sizeValue) {
            if((sizeValue == 0 && selected2 == 0) || (sizeValue !=0 && selected2 == 0) || (sizeValue ==0 && selected2 != 0)) {
                finalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
                if(promo == 'IWANTPOPART') {
                    finalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
                }
            } else if(option == 0) {   
                if(promo == 'IWANTPOPART') {
                    finalPrice.textContent = Math.round((picturePrice * sizeValue + materialPrice * selected2) * 0.7);
                    console.log(`(${picturePrice} * ${sizeValue} + ${materialPrice} * ${selected2} + ${selected3}) * 0.7 = ${finalPrice.textContent}`);
                } else {
                    finalPrice.textContent = picturePrice * sizeValue + materialPrice * selected2;
                    console.log(`${picturePrice} * ${sizeValue} + ${materialPrice} * ${selected2} + ${selected3} = ${finalPrice.textContent}`);
                }
            } else {
                if(promo == 'IWANTPOPART') {
                    finalPrice.textContent = Math.round((picturePrice * sizeValue + materialPrice * selected2 + additionalOption) * 0.7);
                    console.log(`(${picturePrice} * ${sizeValue} + ${materialPrice} * ${selected2} + ${additionalOption}) * 0.7 = ${finalPrice.textContent}`);
                } else {
                    finalPrice.textContent = picturePrice * sizeValue + materialPrice * selected2 + additionalOption;
                    console.log(`${picturePrice} * ${sizeValue} + ${materialPrice} * ${selected2} + ${additionalOption} = ${finalPrice.textContent}`);
                }
            }
            
        }

        function switchSelect(value) {
            switch (selected3) {
                case 1:
                    optionSelect(selected3, artGel, iputValue, value);
                    break;
                case 2:
                    optionSelect(selected3, express, iputValue, value);
                    break;
                case 3:
                    optionSelect(selected3, delivery, iputValue, value);
                    break; 
                default:
                    optionSelect(selected3, 0, iputValue, value);
                    break;
            }
        }

        function materialSelected(value) {
            if (selected2 == 1) {
                switchSelect(value);
            } else if (selected2 == 2) {
                switchSelect(value);
            } else if (selected2 == 3) {
                switchSelect(value);
            } else if (selected2 == 0) {
                switchSelect(value);
            }
        }

        function sizeSelected () {
            if (selected1 == 0) {
                materialSelected(size.options[size.selectedIndex].value);
            } else {
                materialSelected(size.options[size.selectedIndex].value);
            }
        }
    }
}

export default calc;