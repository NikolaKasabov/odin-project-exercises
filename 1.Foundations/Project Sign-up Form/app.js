const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  removeErrorMessage();

  if (!arePasswordsTheSame()) {
    addErrorMessage();
  }
});

function arePasswordsTheSame() {
  const password = passwordEl.value;
  const confirmPassword = confirmPasswordEl.value;
  return password === confirmPassword;
}

function addErrorMessage() {
  passwordEl.parentElement.classList.add('error');
  confirmPasswordEl.parentElement.classList.add('error');
}

function removeErrorMessage() {
  passwordEl.parentElement.classList.remove('error');
  confirmPasswordEl.parentElement.classList.remove('error');
}
