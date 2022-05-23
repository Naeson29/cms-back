const orderSelect = {
    name: 'order',
    className: 'select-order',
    data: [
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
    data: [],
};

export default {
    columnSelect,
    orderSelect,
};
