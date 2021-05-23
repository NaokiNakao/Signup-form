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
        if (!isEmail(emailValue)) {
            displayError(email, 'Looks like this is not an email');
            email.value = '';
            email.placeholder = 'email@example/com';
            email.style.color = 'hsl(0, 100%, 74%)';

            email.addEventListener('click', () => {
                email.placeholder = '';
                email.style.color = '#000';
            })
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
        field.placeholder = '';
        formField.classList.add('error');
        small.innerText = msg;
    }

    function correctInput(field) {
        const formField = field.parentElement;
        formField.classList.remove('error');
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});