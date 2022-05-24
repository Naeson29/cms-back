
import { withTranslation } from 'react-i18next';

const validator = ({ t, data, validation }) => {
    let errors = {};

    const regex = {
        email: ({ value }) => {
            const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
            return email ? { success: true } : { error: t('email') };
        },
        password: ({ value, confirmation }) => {
            const length = value.length >= 8;
            const same = value === data[confirmation];

            if (!length) {
                return { error: t('password.length') };
            }

            return same ? { success: true } : { error: t('password.same') };
        },
        sizeImage: ({ value, maxSize }) => {
            const toBig = value.filter(image => image.file.size > maxSize);
            return toBig.length === 0
                ? { success: true } : { error: toBig.length > 1 ? t('image.volumeMany') : t('image.volumeOne') };
        },
    };

    const validationData = Object.keys(data).filter(key => !!validation[key]).map(key => ({
        name: key,
        value: data[key],
        rules: validation[key],
    }));

    validationData.map((key) => {
        const { name, value, rules } = key;
        const { label, required = false, rule = false, params = {} } = rules;

        if (!value && required) {
            errors = {
                ...errors,
                [name]: t('required', { label }),
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

export default withTranslation('validator')(validator);
