import { ImUsers } from 'react-icons/im';
import { model } from '../model';
import { userActions } from '../../actions';
import list from './list';
import card from './card';
import form from './form';
import modals from './modals';
import detail from './detail';

export default {

    ...model,

    name: 'user',

    route: 'users',

    creators: userActions(),

    menu: {
        label: 'Utilisateurs',
        icon: ImUsers,
    },

    list: {
        ...model.list,
        ...list,
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
            type: 'medium',
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
