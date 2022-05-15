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
            element: 'input',
            name: 'type',
            type: 'hidden',
            value: 1,
            column: 1,
        },
        {
            element: 'upload',
            name: 'imagesUpload',
            multiple: true,
            maxNumber: 5,
            label: 'Images',
            column: 2,
        },
    ],
    validation: {
        title: {
            name: 'Titre',
            required: true,
        },
    },
});
