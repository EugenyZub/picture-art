import slider from './parts/slider';
import modalPopupDesign from './parts/modal-popup-design';
import modalPopupConsultation from './parts/modal-popup-consultation';
import moreStyles from './parts/styles';
import bigSlider from './parts/big-slider';
import oftenQuestions from './parts/often-questions';
import calc from './parts/calc';

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    bigSlider();
    calc();
    modalPopupDesign(); 
    modalPopupConsultation();
    moreStyles();
    oftenQuestions();
    slider(); 
    
});