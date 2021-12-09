
export default (data, validation) => {
    const error = {};

    const regex = {
        email: ({ value }) => {
            const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
            return email ? { success: true } : { error: 'L\'adresse email invalide' };
        },
        password: ({ value, confirmation }) => {
            const length = value.length >= 8;
            const same = value === confirmation;

            if (!length) {
                return { error: 'Minimum 8 caractères pour le mot de passe' };
            }

            return same ? { success: true } : { error: 'Les mots de passe ne sont pas identiques' };
        },
        sizeImage: ({ value, maxSize }) => {
            let invalid;

            for (let i = 0; i < value.length; i += 1) {
                if (value[i].file.size > maxSize) {
                    invalid = true;
                    break;
                }
            }

            let message = '';
            if (value.length === 1) {
                message = 'L\'image est trop volumineuse';
            } else {
                message = 'Une ou plusieurs images sont trop volumineuses';
            }

            return !invalid ? { success: true } : { error: message };
        },
    };


    Object.keys(data).map((key) => {
        if (validation[key]) {
            const rules = validation[key];
            const { required = false, rule = false, maxSize = 2000000 } = rules;
            const value = data[key];

            if (required && !value) {
                error[key] = `Le champ ${rules.name} est requis`;
                return error;
            }

            if (rule && !!value) {
                const regexFunction = regex[rule];
                let params = { value };
                if (rule === 'password') {
                    params = {
                        ...params,
                        confirmation: data.confirmation,
                    };
                }
                if (rule === 'sizeImage') {
                    params = {
                        ...params,
                        maxSize,
                    };
                }
                const validate = regexFunction(params);
                if (validate.error) {
                    error[key] = validate.error;
                }
                return error;
            }
        }
        return error;
    });

    return Object.keys(error).length > 0 ? { error } : { success: true };
};
