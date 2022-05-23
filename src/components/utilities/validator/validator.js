
export default (data, validation) => {
    const errors = {};

    const regex = {
        email: ({ value }) => {
            const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
            return email ? { success: true } : { error: 'L\'adresse email invalide' };
        },
        password: ({ value, data, confirmation }) => {
            const length = value.length >= 8;
            const same = value === data[confirmation];

            if (!length) {
                return { error: 'Minimum 8 caractères pour le mot de passe' };
            }

            return same ? { success: true } : { error: 'Les mots de passe ne sont pas identiques' };
        },
        sizeImage: ({ value, maxSize }) => {
            const toBig = value.filter(image => image.file.size > maxSize);
            const length = toBig.length;
            const message = length === 0 ? '' : (length > 1 ? 'Une ou plusieurs images sont trop volumineuses' : 'L\'image est trop volumineuse');

            return length === 0 ? { success: true } : { error: message };
        },
    };

    const validationData = Object.keys(data).filter(key => !!validation[key]).map(key => ({
        value: data[key],
        validation: validation[key]
    }));

    validationData.map((key) => {
        const { value, validation } = key;
        const { name, required = false, rule = false, params = {} } = validation;
               
        if (!value && required) {
            return { ...errors, [key]: `Le champ "${name}" est obligatoire` };
        }

        if (rule) {
            const regexFunction = regex[rule];
            const validate = regexFunction({
                value,
                data,
                ...params
            });
            if (validate.error) {
                return { ...errors, [key]: validate.error };
            }
        }

        return errors;
    });

    return Object.keys(errors).length > 0 ? { errors } : { success: true };
};
