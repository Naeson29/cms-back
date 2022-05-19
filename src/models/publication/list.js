export default {
    parameters: {
        params: {
            limit: 6,
            order: {
                column: 'created_at',
                desc: true,
            },
        },
        filters: [
            {
                label: 'Publiée',
                value: 1,
            },
            {
                label: 'Non publiée',
                value: 2,
            },
        ],
    },
    inputSearch: {
        columns: ['title', 'content'],
        placeholder: 'Titre, contenu...',
    },
    selectOrder: [
        {
            label: 'Titre',
            value: 'title',
        },
        {
            label: 'Date de création',
            value: 'created_at',
        },
    ],
    selectFilter: [
        {
            label: 'Publiée',
            value: 1,
            filter: {
                column: 'published',
                operator: '=',
                value: 1,
            },
        },
        {
            label: 'Non publiée',
            value: 2,
            filter: {
                column: 'published',
                operator: '=',
                value: 0,
            },
        },
    ],
    filter: true,
};
