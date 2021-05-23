document.addEventListener('DOMContentLoaded', function() {
    // Form objects
    const form = document.getElementById('form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('pwd');

    form.addEventListener('submit', e => {
        e.preventDefault();
        checkFields();
    });

    function checkFields() {
        // Fields values
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        // First name validation
        if (firstNameValue === '') {
            displayError(firstName, 'First Name cannot be empty');
        }
        else {
            correctInput(firstName);
        }

        // Last name validation
        if (lastNameValue === '') {
            displayError(lastName, 'Last Name cannot be empty');
        }
        else {
            correctInput(lastName);
        }

        // Email validation
        if (emailValue === '') {
            displayError(email, 'Looks like this is not an email');
        }
        else {
            correctInput(email);
        }

        // Password validation
        if (passwordValue === '') {
            displayError(password, 'Password cannot be empty');
        }
        else {
            correctInput(password);
        }
    }

    function displayError(field, msg) {
        const formField = field.parentElement;
        const small = formField.querySelector('small');
        formField.classList.add('error');
        small.innerText = msg;
    }

    function correctInput(field) {
        const formField = field.parentElement;
        formField.classList.remove('error');
    }
});