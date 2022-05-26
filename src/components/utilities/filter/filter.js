const orderSelect = t => ({
    name: 'order',
    className: 'select-order',
    data: [
        {
            label: t('orderSelect.ascending'),
            value: 'asc',
        },
        {
            label: t('orderSelect.descending'),
            value: 'desc',
        },
    ],
});

const columnSelect = {
    name: 'column',
    className: 'select-column',
    data: [],
};

export default {
    columnSelect,
    orderSelect,
};
