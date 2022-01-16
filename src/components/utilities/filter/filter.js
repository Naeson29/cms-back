const orderSelect = {
    name: 'order',
    className: 'select-order',
    options: [
        {
            label: 'Ordre croissant',
            value: 'asc',
        },
        {
            label: 'Ordre décroissant',
            value: 'desc',
        },
    ],
};

const columnSelect = {
    name: 'column',
    className: 'select-column',
    options: [],
};

export default {
    columnSelect,
    orderSelect,
};
