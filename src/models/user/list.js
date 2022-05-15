export default {
    parameters: {
        params: {
            limit: 50,
            order: {
                column: 'first_name',
            },
        },
    },
    searches: {
        columns: [
            "concat(first_name, ' ', last_name)",
        ],
        placeholder: 'Prénom et/ou nom...',
    },
    orders: [
        {
            label: 'Prénom',
            value: 'first_name',
        },
        {
            label: 'Nom',
            value: 'last_name',
        },
        {
            label: 'Date de création',
            value: 'created_at',
        },
    ],
};
