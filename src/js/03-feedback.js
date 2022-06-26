import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const inputMassage = document.querySelector('[name="message"]');

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', throttle(onInput, 500));

const userData = {
  email: inputEmail.value,
  message: inputMassage.value,
};

feedbackFormState();

function feedbackFormState() {
  const feedbackFormState = localStorage.getItem(STORAGE_KEY);
  if (feedbackFormState) {
    const parsedUserData = JSON.parse(feedbackFormState);
    const { email, message } = parsedUserData;

    inputEmail.value = email;
    inputMassage.value = message;
    return;
  }
  // inputEmail.value = '';
  // inputMassage.value = '';
}

function onInput() {
  userData.email = inputEmail.value;
  userData.message = inputMassage.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  userData.email = email.value;
  userData.message = message.value;

  console.log(userData);

  event.currentTarget.reset();
  localStorage.clear();
}
