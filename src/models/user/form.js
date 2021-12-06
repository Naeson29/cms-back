export default {
    elements: [
        {
            element: 'input',
            label: 'Prénom',
            placeholder: 'Pierre...',
            name: 'first_name',
        },
        {
            element: 'input',
            label: 'Nom',
            placeholder: 'Richard...',
            name: 'last_name',
        },
        {
            element: 'input',
            label: 'Email',
            placeholder: 'exemple@mail.fr...',
            name: 'email',
        },
        {
            element: 'input',
            label: 'Mot de passe',
            placeholder: '*************',
            name: 'password',
            type: 'password',
        },
        {
            element: 'input',
            name: 'role',
            type: 'hidden',
            value: 3,
        },
    ],
    validation: {
        email: {
            name: 'email',
            required: true,
            rule: 'email',
        },
        first_name: {
            name: 'prénom',
            required: true,
        },
        last_name: {
            name: 'nom',
            required: true,
        },
        password: {
            name: 'mot de passe',
            required: true,
        },
    },
};
