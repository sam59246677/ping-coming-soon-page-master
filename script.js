const form = document.getElementById('notifyForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  // Reset
  emailInput.classList.remove('error');
  errorMessage.style.display = 'none';
  errorMessage.textContent = '';

  // Validation
  if (!email) {
    emailInput.classList.add('error');
    errorMessage.textContent = "Whoops! It looks like you forgot to add your email";
    errorMessage.style.display = 'block';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailInput.classList.add('error');
    errorMessage.textContent = "Please provide a valid email address";
    errorMessage.style.display = 'block';
  } else {
    alert('Thank you! You are subscribed.');
    emailInput.value = '';
  }
});
