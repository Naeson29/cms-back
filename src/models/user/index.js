import { ImUsers } from 'react-icons/im';
import { userActions } from '../../actions';
import card from './card';
import form from './form';
import modals from './modals';
import detail from './detail';

export default {
    name: 'user',

    route: 'users',

    creators: userActions(),

    menu: {
        label: 'Utilisateurs',
        icon: ImUsers,
    },

    list: {
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
        delete: true,
    },

    screens: [
        {
            screen: 'index',
        },
        {
            screen: 'show',
            label: 'detail',
        },
        {
            screen: 'create',
            label: 'create',
        },
        {
            screen: 'update',
            label: 'edit',
        },
    ],

    renders: {
        card: {
            type: 'small',
            render: card,
        },
        detail: {
            render: detail,
        },
        modals: {
            render: modals,
        },
        form: {
            render: form,
        },
    },
};
