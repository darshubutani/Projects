'use strict';
const modal = document.querySelector('.modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
console.log(btnShowModal);
//using function expression
// const closeModal = function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// }
//using Arrow function
const closeModal = () => 
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

//using function expression
// const showModal = function () {
//     console.log("clicked");
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// }
//using Arrow function
const showModal = () => 
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');


document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('.hidden'))
        closeModal();
});

for (let i = 0; i < btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);