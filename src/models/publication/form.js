export default {
    columns: 2,
    elements: [
        {
            element: 'input',
            label: 'Titre',
            placeholder: 'Titre de la publication...',
            name: 'title',
            column: 1,
        },
        {
            element: 'textarea',
            label: 'Contenu',
            placeholder: 'Contenu de la publication...',
            name: 'content',
            column: 1,
        },
    ],
    validation: {
        title: {
            name: 'titre',
            required: true,
        },
    },
};
