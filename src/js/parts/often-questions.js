function oftenQuestions() {
    let accordionBlock = document.querySelectorAll('.accordion-block'),
        accordionHeading = document.querySelectorAll('.accordion-heading'),   
        accordion = document.querySelectorAll('#accordion div');

    //hidden-lg hidden-md hidden-sm hidden-xs
    accordionBlock.forEach((elem)=> {
        elem.classList.add('hidden-lg');   
    });
    
    accordionHeading.forEach((elem2, index)=> {
       let accordionHeadingSpan = elem2.querySelector('span');     

        elem2.addEventListener('click', ()=> {
            accordion[index].classList.toggle('hidden-lg');
            accordion[index].style.marginBottom = '20px';
            accordion[index].style.marginTop = '20px';
            let curentIndex = index;
            accordionHeadingSpan.classList.toggle('active');
           
            accordionBlock.forEach((elem3, index2)=> {
                if(index2 != curentIndex) {
                    elem3.classList.add('hidden-lg');
                    accordionHeadingSpan = accordionHeading[index2].querySelector('span');
                    accordionHeadingSpan.classList.remove('active');    
                }  
            });
        });   
    });  
}

export default oftenQuestions;