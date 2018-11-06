function modalForm() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let popupDesignForm = document.querySelector('.popup-design form'),
        nameToDesign = popupDesignForm.querySelector('#design-name'),
        phoneToDesign = popupDesignForm.querySelector('#design-phone'),
        popupConsultationForm = document.querySelector('.popup-consultation form'),
        nameToConsultation = popupConsultationForm.querySelector('#consultation-name'),
        phoneToConsultation = popupConsultationForm.querySelector('#consultation-phone'),
        textareaDisign = document.querySelector('#textarea'),
        statusMessage = document.createElement('div');

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
        consultationName = document.querySelector('#consult-name'),
        consultationPhone = document.querySelector('#consult-phone'),
        consultationQuestion = document.querySelector('.consultation form .input-text'),
        consultationParagraph = document.querySelector('.consultation .p-heading'), 
        consultationHeader = document.querySelector('.consultation h2');

    numbers(phoneToDesign);
    numbers(phoneToConsultation);
    numbers(consultationPhone);

    russianLetters(nameToDesign);
    russianLetters(nameToConsultation);
    russianLetters(textareaDisign);
    russianLetters(consultationName);
    russianLetters(consultationQuestion);

    function sendDesignForm(elem, modalWindow, modalHeader, modalInputs) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            modalWindow.appendChild(statusMessage);
            let contactFormData = new FormData(elem);

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
}   

export default modalForm;