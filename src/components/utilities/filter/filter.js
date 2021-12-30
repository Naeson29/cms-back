const searchInput = {
    name: 'search',
    className: 'search',
    placeholder: 'Texte de la recherche...',
};

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

export default {
    searchInput,
    orderSelect,
};
