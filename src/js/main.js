import slider from './parts/slider';
import modalpopupdesign from './parts/modal-popup-design';
import modalPopupConsultation from './parts/modal-popup-consultation';
import moreStyles from './parts/styles';
import bigSlider from './parts/big-slider';
import oftenQuestions from './parts/often-questions';

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    slider(); 
    modalpopupdesign(); 
    modalPopupConsultation();
    moreStyles();
    bigSlider();
    oftenQuestions();
});