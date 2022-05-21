export default () => ({
    columns: 2,
    elements: [
        {
            element: 'input',
            label: 'Titre',
            placeholder: 'Titre de la publication...',
            name: 'title',
            column: 1,
            required: true,
        },
        {
            element: 'textarea',
            label: 'Contenu',
            placeholder: 'Contenu de la publication...',
            name: 'content',
            column: 1,
        },
        {
            element: 'switch',
            label: 'Publiée',
            name: 'published',
            column: 1,
            value: false,
        },
        {
            element: 'input',
            name: 'type',
            type: 'hidden',
            value: 1,
            column: 1,
        },
        {
            element: 'upload',
            name: 'images',
            upload: 'uploads',
            multiple: true,
            maxNumber: 4,
            label: 'Images',
            column: 2,
        },
    ],
    validation: {
        title: {
            name: 'Titre',
            required: true,
        },
        content: {
            name: 'Contenu',
            required: true,
        },
    },
});
