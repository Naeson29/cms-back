export default t => ({
    columns: 2,
    elements: [
        {
            name: 'title',
            element: 'input',
            label: t('publication:form.title.label'),
            placeholder: t('publication:form.title.placeholder'),
            column: 1,
            options: {
                required: true,
            },
        },
        {
            name: 'content',
            element: 'textarea',
            label: t('publication:form.content.label'),
            placeholder: t('publication:form.content.placeholder'),
            column: 1,
            options: {
                required: true,
            },
        },
        {
            name: 'published',
            element: 'switch',
            label: t('publication:form.published.label'),
            value: false,
            column: 1,
            options: {
                textOn: t('publication:form.published.options.textOn'),
                textOff: t('publication:form.published.options.textOff'),
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
            label: t('publication:form.images.label'),
            column: 2,
            options: {
                removeAll: true,
                multiple: true,
                maxNumber: 4,
                complement: [t('publication:form.images.complement')],
                maxNumberError: t('publication:form.images.error'),
            },
        },
    ],
    validation: {
        title: {
            label: t('publication:form.title.label'),
            required: true,
        },
        content: {
            label: t('publication:form.content.label'),
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
