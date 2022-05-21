export default action => ({
    columns: 2,
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
            label: 'Adresse email',
            placeholder: 'exemple@mail.fr...',
            name: 'email',
            column: 1,
        },
        ...action === 'create' ? [
            {
                element: 'input',
                label: 'Mot de passe',
                placeholder: '*************',
                name: 'password',
                type: 'password',
                column: 1,
                update: false,
            },
            {
                element: 'input',
                label: 'Confirmation',
                placeholder: 'Confirmation du mot de passe',
                name: 'confirmation',
                type: 'password',
                column: 1,
                update: false,
            },
        ] : [],
        {
            element: 'input',
            name: 'role',
            type: 'hidden',
            value: 3,
            column: 1,
        },
        {
            element: 'upload',
            name: 'image',
            multiple: false,
            maxNumber: 1,
            label: 'Photo',
            column: 2,
        },
    ],
    validation: {
        email: {
            name: 'Adresse email',
            required: true,
            rule: 'email',
        },
        first_name: {
            name: 'Prénom',
            required: true,
        },
        last_name: {
            name: 'Nom',
            required: true,
        },
        ...action === 'create' && {
            password: {
                name: 'Mot de passe',
                required: true,
                rule: 'password',
            },
            confirmation: {
                name: 'Confirmation',
                required: true,
            },
        },
        image: {
            rule: 'sizeImage',
            maxSize: 600000,
        },
    },
});
