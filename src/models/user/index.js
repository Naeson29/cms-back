import { ImUsers } from 'react-icons/im';
import { userActions } from '../../actions';
import card from './card';
import form from './form';
import panels from './panels';
import modals from './modals';
import detail from './detail';

const name = 'user';
const { creators } = userActions();

export default {
    name,
    creators,
    form,
    modals,
    panels,

    path: 'users',
    routeName: 'Users',
    menuLabel: 'Utilisateurs',

    list: {
        params: {
            limit: 50,
            order: {
                column: 'first_name',
            },
        },
    },
    search: {
        columns: [
            "concat(first_name, ' ', last_name)",
        ],
        placeholder: 'Prénom et/ou nom...',
    },
    order: [
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
    actions: [
        { action: 'index' },
        { action: 'show' },
        { action: 'update' },
    ],
    renders: {
        card: {
            type: 'small',
            component: card,
        },
        detail,
        menuIcon: ImUsers,
    },
};
