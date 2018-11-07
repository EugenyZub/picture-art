function modalForm() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let popupDesignForm = document.querySelector('.popup-design form'),
        nameToDesign = document.getElementById('design-name'),       //поле 'имя' в модальной форме popup-design 
        phoneToDesign = document.getElementById('design-phone'),     //поле 'телефон' в модальной форме popup-design 
        emailToDesign = document.getElementById('design-email'),     //поле 'email' в модальной форме popup-design 
        popupConsultationForm = document.querySelector('.popup-consultation form'),
        nameToConsultation = popupConsultationForm.querySelector('#consultation-name'),
        //phoneToConsultation = popupConsultationForm.querySelector('#consultation-phone'),
        textareaDisign = document.getElementById('textarea'),
        statusMessage = document.createElement('div'),
        btn = document.createElement('button');

    let afterConsultationModal = document.querySelector('.popup-consultation .popup-content'),
        headerConsultationModal = document.querySelector('.popup-consultation h4'),
        inputsConsultationModal = document.querySelector('.popup-consultation .main-form');

    let afterDesignModal = document.querySelector('.popup-design .popup-content'),
        headerDesignModal = document.querySelector('.popup-design h4'),
        uploadDesignModal = document.querySelector('.popup-design .file_uploa'),
        inputsDesignModal = document.querySelector('.popup-design .main-form'),

        afterconsultationSection = document.querySelector('.consultation'),
        consultationWrapper = document.querySelector('.consultation .col-md-offset-1'),
        consultationForm = document.querySelector('.consultation form'),
        consultationName = document.querySelector('.main-form input'),          //поле 'имя' в модальной форме popup-consultation 
        consultationPhone = document.getElementById('consultation-phone'),      //поле 'телефон' в модальной форме popup-consultation 
        consultationEmail = document.getElementById('consult-email'),
        consultName = document.getElementById('consult-name'),
        consultPhone = document.getElementById('consult-phone'),
        consultText = document.getElementById('consult-text'),
        consultationQuestion = document.querySelector('.consultation form .input-text'),
        consultationParagraph = document.querySelector('.consultation .p-heading'), 
        consultationHeader = document.querySelector('.consultation h2'),

        closeDesign = document.querySelector('.popup-design .popup-close'),
        closeConsultation = document.querySelector('.popup-consultation .popup-close'),
        overflowDesign = document.querySelector('.popup-design'),
        overflowConsultation = document.querySelector('.popup-consultation');

        //questionsBtn = document.getElementById('questions');

    btn.classList.add('button');
    btn.classList.add('button-order');
    btn.classList.add('hidden-lg');
    btn.classList.add('hidden-md');
    btn.classList.add('hidden-sm');
    btn.classList.add('hidden-xs');
    btn.textContent = 'Ещё вопросы?';
   

    numbers(phoneToDesign);
    numbers(consultPhone);
    numbers(consultationPhone);

    russianLetters(nameToDesign);
    russianLetters(nameToConsultation);
    russianLetters(textareaDisign);
    russianLetters(consultationName);
    russianLetters(consultationQuestion);

    function sendDesignForm(elem, modalWindow, modalHeader, modalInputs) {
        // if (elem == popupConsultationForm || elem == popupDesignForm) {
        //     modalWindow.appendChild(statusMessage);
        // } else if (elem == consultationForm){
        //     modalWindow.appendChild(btn);
        //     modalWindow.insertBefore(statusMessage, btn);
        // }
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            let contactFormData = new FormData(elem);
            if (elem == popupConsultationForm || elem == popupDesignForm) {
                modalWindow.appendChild(statusMessage);
            } else if (elem == consultationForm){
                modalWindow.appendChild(statusMessage);
                modalWindow.appendChild(btn);
            }
            postData(contactFormData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    if (elem == popupConsultationForm) {
                        modalInputs.style.display = 'none';
                        modalHeader.style.display = 'none';
                    } else if (elem == popupDesignForm) {
                        modalInputs.style.display = 'none';
                        modalHeader.style.display = 'none';
                        uploadDesignModal.style.display = 'none';
                    } else if (elem == consultationForm) {
                        modalHeader.style.display = 'none';
                        modalInputs.style.display = 'none';
                        consultationWrapper.classList.add('hidden-lg');
                        consultationWrapper.classList.add('hidden-sm');
                        consultationWrapper.classList.add('hidden-xs');
                        btn.classList.remove('hidden-lg');
                        btn.classList.remove('hidden-md');
                        btn.classList.remove('hidden-sm');
                        btn.classList.remove('hidden-xs');
                    }
                    
                    statusMessage.style.textAlign = 'center';
                    statusMessage.innerHTML = message.success;  
                })
                .catch(() => statusMessage.innerHTML = message.failure);     
        });

    }
    sendDesignForm(popupConsultationForm, afterConsultationModal, headerConsultationModal, inputsConsultationModal);
    sendDesignForm(popupDesignForm, afterDesignModal, headerDesignModal, inputsDesignModal);
    sendDesignForm(consultationForm, afterconsultationSection, consultationHeader, consultationParagraph);
    

    closeDesign.addEventListener('click', ()=> {
        returnForms(popupDesignForm, afterDesignModal, headerDesignModal, inputsDesignModal);
        clearInputs(emailToDesign);
        clearInputs(nameToDesign);
        clearInputs(phoneToDesign);
        clearInputs(textareaDisign);
    });

    overflowDesign.addEventListener('click', ()=> {
        if(!event.target.closest('.popup-content')) {
            overflowDesign.style.display = 'none';
            document.body.style.overflow = '';
            returnForms(popupDesignForm, afterDesignModal, headerDesignModal, inputsDesignModal);
            clearInputs(emailToDesign);
            clearInputs(nameToDesign);
            clearInputs(phoneToDesign);
            clearInputs(textareaDisign);
        } 
    });

    closeConsultation.addEventListener('click', ()=> {
        returnForms(popupConsultationForm, afterConsultationModal, headerConsultationModal, inputsConsultationModal);
        clearInputs(consultationName);
        clearInputs(consultationPhone);
    });

    overflowConsultation.addEventListener('click', ()=> {
        if(!event.target.closest('.popup-content')) {
            overflowConsultation.style.display = 'none';
            document.body.style.overflow = '';
            returnForms(popupConsultationForm, afterConsultationModal, headerConsultationModal, inputsConsultationModal);
            clearInputs(consultationName);
            clearInputs(consultationPhone);
        } 
    });

    btn.addEventListener('click', ()=> {
        returnForms(consultationForm, afterconsultationSection, consultationHeader, consultationParagraph);
        clearInputs(consultationEmail);
        clearInputs(consultName);
        clearInputs(consultPhone);
        clearInputs(consultText);
        afterconsultationSection.removeChild(btn);
    });

    //Только цифры и знак +
    function numbers(value) {
        value.addEventListener('keypress', function () {
            let that = this;
            setTimeout(function () {
                that.value = that.value.replace(/[a-zA-z]|[а-яА-Я]/g, '');
                that.value = that.value.replace(/[0-9][+]/g, that.value.substr(that.value.length), '');
                that.value = that.value.replace(/[+][+]/g, that.value.substr(that.value.length), '');
            }, 0);
        });
    }

    //Только русские буквы
    function russianLetters(value) {
        value.addEventListener('keypress', function () {
            let that = this;
            setTimeout(function () {
                that.value = that.value.replace(/[^а-яА-ЯЁё ]/g, '');
            }, 0);
        });
    }

    //Промис
    function postData(data) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();

            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    resolve();
                } else if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                }
            };
            request.send(data);
        });
    }

    //Очищение инпута формы после ввода отправки данных
    function clearInputs(input) {
            input.value = '';
    }

    function returnForms(elem, modalWindow, modalHeader, modalInputs) {     
        modalWindow.appendChild(statusMessage);
        //modalWindow.removeChild(statusMessage); 
        
        //console.log(1);
        if (elem == popupConsultationForm) {
            modalInputs.style.display = 'block';
            modalHeader.style.display = 'block';
            modalWindow.removeChild(statusMessage);
        } else if (elem == popupDesignForm) {
            modalInputs.style.display = 'block';
            modalHeader.style.display = 'block';
            uploadDesignModal.style.display = 'block';
            modalWindow.removeChild(statusMessage);
        } else if (elem == consultationForm) {
            modalHeader.style.display = 'block';
            modalInputs.style.display = 'block';
            consultationWrapper.classList.remove('hidden-lg');
            consultationWrapper.classList.remove('hidden-sm');
            consultationWrapper.classList.remove('hidden-xs');
           modalWindow.removeChild(statusMessage);
        }
    } 
}   

export default modalForm;