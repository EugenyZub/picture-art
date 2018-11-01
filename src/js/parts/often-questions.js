function oftenQuestions() {
    let accordionBlock = document.querySelectorAll('.accordion-block'),
        accordionHeading = document.querySelectorAll('.accordion-heading'),
        
        accordion = document.querySelectorAll('#accordion div');
    //hidden-lg hidden-md hidden-sm hidden-xs
    accordionBlock.forEach((elem)=> {
        elem.classList.add('hidden-lg');   
    });
    
    accordionHeading.forEach((elem, index)=> {
        elem.addEventListener('click', ()=> {
            accordion[index].classList.toggle('hidden-lg');
            accordion[index].style.marginBottom = '20px';
            accordion[index].style.marginTop = '20px';

            let accordionHeadingSpan = elem.querySelector('span');
            console.log(accordionHeadingSpan);
            accordionHeadingSpan.classList.toggle('active');
        });
        
        elem.forEach( ()=> {

        });
    });

    
}

export default oftenQuestions;