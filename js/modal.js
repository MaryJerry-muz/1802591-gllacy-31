let modal = document.querySelector('.callback-modal');
let modalButton = document.querySelector('.modal-button');
let modalBackground = document.querySelector('.modal-wrapper');

modalButton.onclick = function () {
  modal.classList.add('opened');
  modalBackground.classList.add('modal-background');
};

let closeButton = document.querySelector('.modal-close');

closeButton.onclick = function () {
  modal.classList.remove('opened');
  modalBackground.classList.remove('modal-background');
};