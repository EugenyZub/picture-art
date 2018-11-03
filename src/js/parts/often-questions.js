function oftenQuestions() {
    let accordionBlock = document.querySelectorAll('.accordion-block'),
        accordionHeading = document.querySelectorAll('.accordion-heading'),   
        accordion = document.querySelectorAll('#accordion div');

    accordionBlock.forEach((elem)=> {
        workWithClass(elem, 'add');  
    });
    
    accordionHeading.forEach((elem2, index)=> {
       let accordionHeadingSpan = elem2.querySelector('span');     

        elem2.addEventListener('click', ()=> {
            workWithClass(accordion[index], 'toggle');
            accordion[index].style.marginBottom = '20px';
            accordion[index].style.marginTop = '20px';
            let curentIndex = index;
            accordionHeadingSpan = accordionHeading[curentIndex].querySelector('span');
            accordionHeadingSpan.classList.toggle('active');

            accordionBlock.forEach((elem3, index2)=> {
                if(index2 != curentIndex) {
                    workWithClass(elem3, 'add');
                    accordionHeadingSpan = accordionHeading[index2].querySelector('span');
                    accordionHeadingSpan.classList.remove('active');    
                }
            });
        });   
    });  

    function workWithClass(element, action) {
        if (action == 'add') {
            element.classList.add('hidden-lg');
            element.classList.add('hidden-md');   
            element.classList.add('hidden-sm');   
            element.classList.add('hidden-xs'); 
        }
        
        if (action == 'toggle') {
            element.classList.toggle('hidden-lg');
            element.classList.toggle('hidden-md');   
            element.classList.toggle('hidden-sm');   
            element.classList.toggle('hidden-xs'); 
        }
    }
}

export default oftenQuestions;