export default {
    parameters: {
        params: {
            limit: 6,
            order: {
                column: 'created_at',
                desc: true,
            },
        },
    },
    searches: {
        columns: ['title', 'content'],
        placeholder: 'Titre, contenu...',
    },
    orders: [
        {
            label: 'Titre de publication',
            value: 'title',
        },
        {
            label: 'Date de création',
            value: 'created_at',
        },
    ],
    filters: [
        {
            label: 'Publiée',
            value: {
                column: 'published',
                operator: '=',
                value: 1,
            },
        },
        {
            label: 'Non publiée',
            value: {
                column: 'published',
                operator: '=',
                value: 0,
            },
        },
    ],
    filter: true,
};
