
export default (data, validation) => {
    const error = {};

    const regex = {
        email: (value) => {
            const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
            return email ? { success: true } : { error: 'Adresse email invalide' };
        },
    };


    Object.keys(data).map((key) => {
        if (validation[key]) {
            const rules = validation[key];
            const value = data[key];

            if (rules.required && !value) {
                error[key] = `Le champ ${rules.name} est requis`;
                return error;
            }

            if (rules.rule) {
                const regexFunction = regex[key];
                const validate = regexFunction(value);
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
