const paginations = ['button', 'scroll'];

export default {
    name: 'default',

    route: 'default',

    creators: false,

    menu: {
        label: 'default',
        icon: null,
    },

    list: () => ({
        parameters: {},
        searches: {},
        orders: [],
        filters: [],
        filter: false,
        deletion: true,
        pagination: paginations[0],
    }),

    screens: [],

    renders: {},
};
