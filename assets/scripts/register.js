document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    if (!registrationForm) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const acceptTermsCheckbox = document.getElementById('acceptTerms');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const termsError = document.getElementById('terms-error');

    const showError = (element, message, errorElement) => {
        element.classList.add('is-invalid');
        errorElement.textContent = message;
    };

    const hideError = (element, errorElement) => {
        element.classList.remove('is-invalid');
        errorElement.textContent = '';
    };

    const validateName = () => {
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'El nombre es obligatorio.', nameError);
            return false;
        } else if (nameInput.value.trim().length < 3) {
            showError(nameInput, 'El nombre debe tener al menos 3 caracteres.', nameError);
            return false;
        }
        hideError(nameInput, nameError);
        return true;
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Verifica formato de correo electrónico
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'El correo electrónico es obligatorio.', emailError);
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, 'Introduce un correo electrónico válido.', emailError);
            return false;
        }
        hideError(emailInput, emailError);
        return true;
    };

    const validatePassword = () => {
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'La contraseña es obligatoria.', passwordError);
            return false;
        } else if (passwordInput.value.trim().length < 8) {
            showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres.', passwordError);
            return false;
        }
        hideError(passwordInput, passwordError);
        return true;
    };

    const validateConfirmPassword = () => {
        if (confirmPasswordInput.value.trim() === '') {
            showError(confirmPasswordInput, 'Confirma tu contraseña.', confirmPasswordError);
            return false;
        } else if (confirmPasswordInput.value !== passwordInput.value) {
            showError(confirmPasswordInput, 'Las contraseñas no coinciden.', confirmPasswordError);
            return false;
        }
        hideError(confirmPasswordInput, confirmPasswordError);
        return true;
    };

    const validateTerms = () => {
        if (!acceptTermsCheckbox.checked) {
            showError(acceptTermsCheckbox, 'Debes aceptar los términos y condiciones.', termsError);
            return false;
        }
        hideError(acceptTermsCheckbox, termsError);
        return true;
    };

    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
    acceptTermsCheckbox.addEventListener('change', validateTerms);

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const areTermsAccepted = validateTerms();

        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && areTermsAccepted) {
            console.log('Formulario enviado con éxito:', {
                name: nameInput.value,
                email: emailInput.value,
            });

            alert('¡Registro exitoso! Redirigiendo a la página de inicio de sesión...');
            window.location.href = 'index.html#login';
            registrationForm.reset();
        } else {
            console.log('El formulario contiene errores.');
        }
    });
});