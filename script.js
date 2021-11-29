const form = document.querySelector('form');
const inputSection = document.getElementById('input');
const alertText = document.getElementById('alert-text');
const errorIcon = document.getElementById('error-icon');

let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e) => {
  if (inputSection.value.match(pattern)) {
    inputSection;
  } else {
    e.preventDefault();
    errorIcon.classList.toggle('visible');
    alertText.classList.toggle('visible');
  }
});
