function modalForm() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let popupDesignForm = document.querySelector('.popup-design form'),
        nameToDesign = popupDesignForm.querySelector('#design-name'),
        phoneToDesign = popupDesignForm.querySelector('#design-phone'),
        emailToDeign = popupDesignForm.querySelector('#design-email'),
        popupConsultationForm = document.querySelector('.popup-consultation form'),
        nameToConsultation = popupConsultationForm.querySelector('#consultation-name'),
        phoneToConsultation = popupConsultationForm.querySelector('#consultation-phone'),

        statusMessage = document.createElement('div');

    numbers(phoneToDesign);
    numbers(phoneToConsultation);

    function sendDesignForm(elem) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let contactFormData = new FormData(elem);

            //Очищение инпута формы после ввода отправки данных
            // function clearInputs() {
            //     for (let i = 0; i < input.length; i++) {
            //         input[i].value = '';
            //     }
            // }

            postData(contactFormData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure);
                //.then(clearInputs);
        });
    }

    sendDesignForm(popupConsultationForm);
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

    // console.log(popupDesignForm);
    // console.log(nameToDesign);
    // console.log(phoneToDesign);
    // console.log(emailToDeign);

    // console.log(popupConsultationForm);
    // console.log(nameToConsultation);
    // console.log(phoneToConsultation);

}   

export default modalForm;