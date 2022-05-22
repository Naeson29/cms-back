export default () => ({
    columns: 2,
    elements: [
        {
            element: 'input',
            label: 'Titre',
            placeholder: 'Titre de la publication...',
            name: 'title',
            required: true,
            column: 1,
        },
        {
            element: 'textarea',
            label: 'Contenu',
            placeholder: 'Contenu de la publication...',
            name: 'content',
            required: true,
            column: 1,
        },
        {
            element: 'switch',
            label: 'Visibilité',
            labelOn: 'Publiée',
            labelOff: 'Non publiée',
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
            removeAll: true,
            multiple: true,
            maxNumber: 4,
            label: 'Photos',
            complement: ['Ajouter une ou plusieurs photos'],
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
        images: {
            rule: 'sizeImage',
            maxSize: 2000000,
        },
    },
});
