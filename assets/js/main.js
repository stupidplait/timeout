'use strict';

function openPopup(event) {
    popupWindow.querySelector('.popup__timer').innerHTML = timerCount--;
    popupWindow.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    let timerClose = setInterval(() => {
        if (timerCount < 1) {
            timerCount = 5;
            popupWindow.style.display = '';
            document.body.style.overflow = '';
            clearInterval(timerClose);
        } else {
            popupWindow.querySelector('.popup__timer').innerHTML = timerCount--;
        }
    }, 1000);
}

const popupWindow = document.querySelector('.popup');

let timerCount = 5;

let timerOpen = setTimeout(() => {
    openPopup();
}, 1000);

document.querySelector('.popup__open').addEventListener('click', function (event) {
    event.preventDefault();

    openPopup();
});

document.body.addEventListener('keydown', function (event) {
    event.preventDefault();
})