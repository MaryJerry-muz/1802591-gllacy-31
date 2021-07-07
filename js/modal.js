let modal = document.querySelector('.callback-modal');
let modalButton = document.querySelector('.modal-button');

modalButton.onclick = function () {
  modal.classList.add('opened');
};

let closeButton = document.querySelector('.modal-close');

closeButton.onclick = function () {
  modal.classList.remove('opened');
};