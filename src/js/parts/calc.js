// Начальная цена за картину размером 40х50:  1000 (коэффициент равен 1),
//                                    50х70:  1200 (коэффициент равен 1.2), 
//                                    70х70:  1400 (коэффициент равен 1.4), 
//                                    70х100: 1600 (коэффициент равен 1.6);
// Материалы: волокно: + 1500, 
//            лён:     + 2000, 
//            хлопок:  + 2500;
// Доп.услуги: арт-гель: + 1000
//             экспресс: + 2000
//             доставка: + 1000
function calc() {
    let picturePrice = 1000,
        materialPrice = 1500,
        additionalServicesPrice = 1000,

        size = document.querySelector('#size'),
        //sizeOptions = document.querySelectorAll('#size option'),
        material = document.getElementById('material'),
        options = document.getElementById('options'),
        promocode = document.querySelector('.promocode'),

        finalPrice = document.querySelector('.calc-price'),
        buttonCalcPrice = document.querySelector('#price');
    

    size.addEventListener('click', (elem)=> {

        elem.forEach(()=> {
            let sizeOptions = size.selectedOptions;
            console.log(sizeOptions);
            //let curentIndex = 0;

            if (sizeOptions == 0) {
                finalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины'; 
            }

            if(i == 1) {
            console.log(111);
            }
        });
            
            
            
            
            
            

            //let sizeOptions = size.querySelectorAll('option');
            //console.log(sizeOptions);          
            // sizeOptions.forEach((elem, index)=> {
                
            //     elem.addEventListener('click', ()=> {
            //         console.log(sizeOptions.selectedOptions);
            //         if(index == 1) {    
                        
            //             finalPrice.textContent = picturePrice;
            //         } else {
            //             finalPrice.textContent = '';
            //             finalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
            //         }
            //     });
            // });
            
    //console.log(size);
    });
}

export default calc;