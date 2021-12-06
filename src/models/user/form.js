export default [
    {
        element: 'input',
        label: 'Prénom',
        placeholder: 'Pierre...',
        name: 'first_name',
        require: true,
    },
    {
        element: 'input',
        label: 'Nom',
        placeholder: 'Richard...',
        name: 'last_name',
        require: true,
    },
    {
        element: 'input',
        label: 'Email',
        placeholder: 'exemple@mail.fr...',
        name: 'email',
        require: true,
    },
    {
        element: 'input',
        label: 'Mot de passe',
        placeholder: '*************',
        name: 'password',
        type: 'password',
        require: true,
    },
    {
        element: 'input',
        name: 'role',
        type: 'hidden',
        value: 3,
    },
];
