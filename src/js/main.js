import slider from './parts/slider';
import modalPopupDesign from './parts/modal-popup-design';
import modalPopupConsultation from './parts/modal-popup-consultation';
import moreStyles from './parts/styles';
import bigSlider from './parts/big-slider';
import oftenQuestions from './parts/often-questions';
import calc from './parts/calc';
import filter from './parts/filter';
import giftModal from './parts/gift-modal';
import menu from './parts/menu';
import resizePictures from './parts/pictures-with-different-size';

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    bigSlider();
    calc();
    filter();
    giftModal();
    menu();
    modalPopupDesign(); 
    modalPopupConsultation();
    moreStyles();
    oftenQuestions();
    resizePictures();
    slider();   
});