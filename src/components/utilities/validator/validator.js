
export default (data, validation) => {
    let errors = {};

    const regex = {
        email: ({ value }) => {
            const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
            return email ? { success: true } : { error: 'L\'adresse email invalide' };
        },
        password: ({ value, confirmation }) => {
            const length = value.length >= 8;
            const same = value === data[confirmation];

            if (!length) {
                return { error: 'Minimum 8 caractères pour le mot de passe' };
            }

            return same ? { success: true } : { error: 'Les mots de passe ne sont pas identiques' };
        },
        sizeImage: ({ value, maxSize }) => {
            const toBig = value.filter(image => image.file.size > maxSize);
            return toBig.length === 0
                ? { success: true } : { error: toBig.length > 1 ? 'Une ou plusieurs images sont trop volumineuses' : 'L\'image est trop volumineuse' };
        },
    };

    const validationData = Object.keys(data).filter(key => !!validation[key]).map(key => ({
        name: key,
        value: data[key],
        validator: validation[key],
    }));

    validationData.map((key) => {
        const { name, value, validator } = key;
        const { label, required = false, rule = false, params = {} } = validator;

        if (!value && required) {
            errors = {
                ...errors,
                [name]: `Le champ "${label}" est obligatoire`,
            };
            return errors;
        }

        if (!!value && rule) {
            const regexFunction = regex[rule];
            const validate = regexFunction({
                value,
                ...params,
            });
            if (validate.error) {
                errors = {
                    ...errors, [name]: validate.error,
                };
            }
        }
        return errors;
    });

    return Object.keys(errors).length > 0 ? { errors } : { success: true };
};
