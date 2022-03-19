import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function updateForm() {
  const saveData = localStorage.getItem(STORAGE_KEY);
  const { email, message } = JSON.parse(saveData);
  form.email.value = email;
  form.message.value = message;
  formData.email = email;
  formData.message = message;
}

function onFormInput(evt) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const formDataToSend = new FormData(event.currentTarget);
  formDataToSend.forEach((value, name) => {
    formData[name] = value;
  });

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}
