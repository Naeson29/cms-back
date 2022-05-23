export default () => ({
    columns: 2,
    elements: [
        {
            name: 'first_name',
            element: 'input',
            type: 'text',
            label: 'Prénom',
            placeholder: 'Pierre...',            
            column: 1,
            options: {
                required: true,
            },
        },
        {
            name: 'last_name',
            element: 'input',
            type: 'text',
            label: 'Nom',
            placeholder: 'Richard...',            
            column: 1,
            options: {
                required: true,
            },
        },
        {
            name: 'email',
            element: 'input',
            type: 'text',
            label: 'Adresse email',
            placeholder: 'exemple@mail.fr...',            
            column: 1,
            options: {
                required: true,
            },
        },
        {
            name: 'password',
            element: 'input',
            type: 'password',
            label: 'Mot de passe',
            placeholder: '*************',              
            column: 1,
            options: {
                required: true,
            },
        },
        {
            name: 'confirmation',
            element: 'input',
            type: 'password',
            label: 'Confirmation',
            placeholder: 'Confirmation du mot de passe',                     
            column: 1,
            options: {
                required: true,
            },
        },
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
            label: 'Photo',
            column: 2,
            options: {
                multiple: false,
                maxNumber: 1,            
                complement: ['Ajouter une photo'],
                maxNumberError: 'Vous ne pouvez ajouter qu\'une seule photo',
            },           
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
        password: {
            name: 'Mot de passe',
            required: true,
            rule: 'password',
            params: {
                confirmation: 'confirmation',
            }
        },
        confirmation: {
            name: 'Confirmation',
            required: true,
        },
        image: {
            rule: 'sizeImage',
            params: {
                maxSize: 2000000,
            },            
        },
    },
});
