function filter() {
    let allMenuElements = document.querySelectorAll('.portfolio-menu li'),
        allBtn = document.querySelector('.portfolio-menu .all'),
        loversBtn = document.querySelector('.portfolio-menu .lovers'),
        chefBtn = document.querySelector('.portfolio-menu .chef'),
        girlBtn = document.querySelector('.portfolio-menu .girl'),
        guyBtn = document.querySelector('.portfolio-menu .guy'),
        grandmotherBtn = document.querySelector('.portfolio-menu .grandmother'),
        granddadBtn = document.querySelector('.portfolio-menu .granddad'),

        allPictures = document.querySelectorAll('.portfolio-wrapper .all'),
        lovePictures = document.querySelectorAll('.portfolio-wrapper .lovers'),
        chefPictures = document.querySelectorAll('.portfolio-wrapper .chef'),
        girlPictures = document.querySelectorAll('.portfolio-wrapper .girl'),
        guyPictures = document.querySelectorAll('.portfolio-wrapper .guy'),
        noPictures = document.querySelector('.container .portfolio-no');

    choosingBtn(allBtn,allPictures);
    choosingBtn(loversBtn,lovePictures);
    choosingBtn(chefBtn,chefPictures);
    choosingBtn(girlBtn,girlPictures);
    choosingBtn(guyBtn,guyPictures);
    withoutPictures(grandmotherBtn, noPictures);
    withoutPictures(granddadBtn, noPictures);

    function hiddenAll() {
        allPictures.forEach((elem)=> {
            elem.style.display = 'none';
        });
        noPictures.style.display = 'none';
        allMenuElements.forEach((elem2)=> {
            elem2.classList.remove('active');
        }); 
    }

    function choosingBtn(btn, picturesType) {
        btn.addEventListener('click', ()=> {
            hiddenAll();
            picturesType.forEach((elem)=> {   
                btn.classList.add('active');
                elem.style.display = 'block';
            });
        });
    }

    function withoutPictures(btn, block) {
        btn.addEventListener('click', ()=> {
            hiddenAll();
            btn.classList.add('active');
            block.style.display = 'block';
        });
    }
}

export default filter;