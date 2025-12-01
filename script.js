const form = document.querySelector('form');
const emailInput = document.getElementById('inputEmail');
const errorMsg = document.querySelector('.invalid-feedback');

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
        // 1. The field is empty
        errorMsg.textContent = 'Whoops! It looks like you forgot to add your email';
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
    } else if (!emailRegex.test(emailValue)) {
        // 2. Invalid email format
        errorMsg.textContent = 'Please provide a valid email address';
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
    } else {
        // 3. Email is valid - form can be submitted
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        errorMsg.textContent = '';

        form.submit();

        emailInput.value = '';
    }
});