
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
    };


    Object.keys(data).map((key) => {
        if (validation[key]) {
            const rules = validation[key];
            const { required = false, rule = false } = rules;
            const value = data[key];

            if (required && !value) {
                error[key] = `Le champ ${rules.name} est requis`;
                return error;
            }

            if (rule) {
                const regexFunction = regex[rule];
                let params = { value };
                if (rule === 'password') {
                    params = {
                        ...params,
                        confirmation: data.confirmation,
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
