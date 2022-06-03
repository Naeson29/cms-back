import custom from './custom';

export default {
    default: ({ t, data, current }) => {
        let password = [];

        if (!data.id) {
            password = [
                {
                    name: 'password',
                    element: 'input',
                    type: 'password',
                    label: t('user:form.password.label'),
                    placeholder: t('user:form.password.placeholder'),
                    column: 1,
                    options: {
                        required: true,
                    },
                },
                {
                    name: 'confirmation',
                    element: 'input',
                    type: 'password',
                    label: t('user:form.confirmation.label'),
                    placeholder: t('user:form.confirmation.placeholder'),
                    column: 1,
                    options: {
                        required: true,
                    },
                },
            ];
        } else if (data.id === current.id) {
            password = [
                {
                    element: 'custom',
                    render: custom.passwordButton,
                    column: 1,
                },
            ];
        }


        return {
            columns: 2,
            elements: [
                {
                    name: 'first_name',
                    element: 'input',
                    type: 'text',
                    label: t('user:form.first_name.label'),
                    placeholder: t('user:form.first_name.placeholder'),
                    column: 1,
                    options: {
                        required: true,
                    },
                },
                {
                    name: 'last_name',
                    element: 'input',
                    type: 'text',
                    label: t('user:form.last_name.label'),
                    placeholder: t('user:form.last_name.placeholder'),
                    column: 1,
                    options: {
                        required: true,
                    },
                },
                {
                    name: 'email',
                    element: 'input',
                    type: 'text',
                    label: t('user:form.email.label'),
                    placeholder: t('user:form.email.placeholder'),
                    column: 1,
                    options: {
                        required: true,
                    },
                },
                ...password,
                {
                    name: 'role',
                    element: 'input',
                    type: 'hidden',
                    value: 3,
                    column: 1,
                },
                {
                    name: 'image',
                    element: 'upload',
                    column: 2,
                    options: {
                        multiple: false,
                        maxNumber: 1,
                        complement: [t('user:form.image.complement')],
                        maxNumberError: t('user:form.image.error'),
                    },
                },
            ],
            validation: {
                email: {
                    label: t('user:form.email.label'),
                    required: true,
                    rule: 'email',
                },
                first_name: {
                    label: t('user:form.first_name.label'),
                    required: true,
                },
                last_name: {
                    label: t('user:form.last_name.label'),
                    required: true,
                },
                ...password.length > 0 && {
                    password: {
                        label: t('user:form.password.label'),
                        required: true,
                        rule: 'password',
                        params: {
                            confirmation: 'confirmation',
                        },
                    },
                    confirmation: {
                        label: t('user:form.confirmation.label'),
                        required: true,
                    },
                },
                image: {
                    rule: 'sizeImage',
                    params: {
                        maxSize: 2000000,
                    },
                },
            },
        };
    },
    password: ({ t }) => ({
        columns: 2,
        elements: [
            {
                name: 'oldPassword',
                element: 'input',
                type: 'password',
                label: t('user:form.oldPassword.label'),
                placeholder: t('user:form.password.placeholder'),
                column: 1,
                options: {
                    required: true,
                },
            },
            {
                name: 'newPassword',
                element: 'input',
                type: 'password',
                label: t('user:form.newPassword.label'),
                placeholder: t('user:form.password.placeholder'),
                column: 1,
                options: {
                    required: true,
                },
            },
            {
                name: 'confirmation',
                element: 'input',
                type: 'password',
                label: t('user:form.confirmation.label'),
                placeholder: t('user:form.confirmation.placeholder'),
                column: 1,
                options: {
                    required: true,
                },
            },
        ],
        validation: {
            oldPassword: {
                label: t('user:form.oldPassword.label'),
                required: true,
            },
            newPassword: {
                label: t('user:form.newPassword.label'),
                required: true,
                rule: 'password',
                params: {
                    confirmation: 'confirmation',
                },
            },
            confirmation: {
                label: t('user:form.confirmation.label'),
                required: true,
            },
        },
    }),
};
