const modalButton = document.querySelector('.modal-button');
const modal = document.querySelector('.callback-modal');
const modalBackground = document.querySelector('.modal-wrapper');
const closeButton = modal.querySelector('.modal-close');
const form = modal.querySelector('.callback-form');
const name = modal.querySelector('[name="callback-name"]');
const email = modal.querySelector('[name="callback-email"]');
const submitBtn = modal.querySelector('.submitBtn');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try {
	storage = localStorage.getItem('name');
} catch (err) {
	isStorageSupport = false;
}

modalButton.addEventListener('click', function () {
	modal.classList.add('opened');
	modalBackground.classList.add('modal-background');

	if (isStorageSupport) {
		name.value = storage;
		email.focus();
	} else {
		name.focus();
	}
});

closeButton.addEventListener('click', function () {
	modal.classList.remove('opened');
	modal.classList.remove('modal-error');
	modalBackground.classList.remove('modal-background');
});

form.addEventListener('submit', function (evt) {
	if (!name.value || !email.value) {
		evt.preventDefault();
		modal.classList.remove('modal-error');
		modal.offsetWidth = modal.offsetWidth;
		modal.classList.add('modal-error');
	} else {
		if (isStorageSupport) {
			localStorage.setItem('name', name.value);
		}
	}
});

email.addEventListener("input", function (evt) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Мороженое тает, котики негодуют, e-mail адрес некорректный");
    submitBtn.onclick = function () {
    	modal.classList.remove('modal-error');
		modal.offsetWidth = modal.offsetWidth;
		modal.classList.add('modal-error');
    }
  } else {
    email.setCustomValidity("");
  }
});


window.addEventListener('keydown', function (evt) {
	if (evt.key === 'Escape' || evt.key === 'Esc') {
		evt.preventDefault();
		modal.classList.remove('opened');
		modal.classList.remove('modal-error');
		modalBackground.classList.remove('modal-background');
	}
});