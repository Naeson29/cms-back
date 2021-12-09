export default {
    elements: [
        {
            element: 'input',
            label: 'Prénom',
            placeholder: 'Pierre...',
            name: 'first_name',
            column: 1,
        },
        {
            element: 'input',
            label: 'Nom',
            placeholder: 'Richard...',
            name: 'last_name',
            column: 1,
        },
        {
            element: 'input',
            label: 'Email',
            placeholder: 'exemple@mail.fr...',
            name: 'email',
            column: 1,
        },
        {
            element: 'input',
            label: 'Mot de passe',
            placeholder: '*************',
            name: 'password',
            type: 'password',
            column: 1,
        },
        {
            element: 'input',
            label: 'Confirmation',
            placeholder: 'Confirmation du mot de passe',
            name: 'confirmation',
            type: 'password',
            column: 1,
        },
        {
            element: 'input',
            name: 'role',
            type: 'hidden',
            value: 3,
            column: 1,
        },
        {
            element: 'upload',
            name: 'userImage',
            multiple: false,
            maxNumber: 1,
            label: 'Image utilisateur',
            column: 2,
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
            rule: 'password',
        },
        confirmation: {
            name: 'confirmation',
            required: true,
        },
    },
};
