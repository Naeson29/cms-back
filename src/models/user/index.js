import { ImUsers } from 'react-icons/im';
import { userActions } from '../../actions';
import card from './card';
import form from './form';
import modals from './modals';
import detail from './detail';

const name = 'user';
const { creators } = userActions();

export default {
    name,

    path: 'users',

    routeName: 'Users',

    creators,

    form,

    modals,

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
    },

    actions: [
        {
            action: 'index',
        },
        {
            action: 'show',
            label: 'detail',
        },
        {
            action: 'create',
            label: 'create',
        },
        {
            action: 'update',
            label: 'edit',
        },
    ],

    renders: {
        card: {
            type: 'small',
            component: card,
        },
        detail: {
            component: detail,
        },
    },
};
