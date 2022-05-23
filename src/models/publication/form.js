export default () => ({
    columns: 2,
    elements: [
        {
            name: 'title',
            element: 'input',
            label: 'Titre',
            placeholder: 'Titre de la publication...',
            column: 1,
            options: {
                required: true,
            },
        },
        {
            name: 'content',
            element: 'textarea',
            label: 'Contenu',
            placeholder: 'Contenu de la publication...',
            column: 1,
            options: {
                required: true,
            },
        },
        {
            name: 'published',
            element: 'switch',
            label: 'Visibilité',
            value: false,
            column: 1,
            options: {
                textOn: 'Publiée',
                textOff: 'Non publiée',
            },
        },
        {
            name: 'type',
            element: 'input',
            type: 'hidden',
            value: 1,
            column: 1,
        },
        {
            name: 'images',
            element: 'upload',
            label: 'Photos',
            column: 2,
            options: {
                removeAll: true,
                multiple: true,
                maxNumber: 4,
                complement: ['Ajouter une ou plusieurs photos'],
                maxNumberError: 'Vous pouvez ajouter 4 photos maximum',
            },
        },
    ],
    validation: {
        title: {
            label: 'Titre',
            required: true,
        },
        content: {
            label: 'Contenu',
            required: true,
        },
        images: {
            rule: 'sizeImage',
            params: {
                maxSize: 2000000,
            },
        },
    },
});
