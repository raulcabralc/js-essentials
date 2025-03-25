class ValidateForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', (event) => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const validFields = this.validFields();
        const validPasswords = this.validPasswords();

        if (validFields && validPasswords) {
            alert('Formulário enviado')
            this.form.submit();
        }
    }

    validFields() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let field of document.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerHTML;
            if (!field.value.trim()) {
                this.createError(field, `${label} não pode estar vazio.`);
                valid = false;
            };

            if (field.classList.contains('cpf')) {
                if (!this.validateCpf(field)) valid = false;
            };

            if (field.classList.contains('user')) {
                if (!this.validateUser(field)) valid = false;
            };
        };
        return valid;
    }

    validateCpf(field) {
        const cpf = new ValidateCpf(field.value);

        if (!cpf.validates()) {
            this.createError(field, 'CPF Inválido.');
        }

        return true;
    }

    validateUser(field) {
        const user = field.value;
        let valid = true;

        if (!user.match(/^[a-zA-Z0-9.-]*$/)) {
            valid = false;
            this.createError(field, 'Usuário deve conter apenas letras e números.');
        };

        if (user.length < 3 || user.length > 12) {
            valid = false;
            if (user.length < 3) {
                this.createError(field, 'O usuário deve conter mais que 3 letras.')
            };
            if (user.length > 12) {
                this.createError(field, 'O usuário deve conter menos que 12 letras.')
            };
        };

        return valid;
    }

    validPasswords() {
        let valid = true

        const password = this.form.querySelector('.password');
        const confirmPassword = this.form.querySelector('.confirm-password');

        if (password.value !== confirmPassword.value) {
            this.createError(password, 'As senhas precisam ser iguais.')
            this.createError(confirmPassword, 'As senhas precisam ser iguais.')
            valid = false;
        }

        if (password.value.length < 6 || password.value.length > 12) {
            valid = false;
            if (password.value.length < 6) {
                this.createError(password, 'A senha deve contter mais que 6 letras.')
            };
            if (password.value.length > 12) {
                this.createError(password, 'A senha deve contter menos que 12 letras.')
            };
        }

        return valid;
    }

    createError(field, message) {
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const validate = new ValidateForm();
