import { BiNews } from 'react-icons/bi';
import {
    defaultActions,
} from '../../actions';
import card from './card';
import form from './form';
import modals from './modals';
import detail from './detail';

const name = 'publication';

export default {
    name,

    route: 'publications',

    creators: defaultActions(name),

    menu: {
        label: 'Publications',
        icon: BiNews,
    },

    list: {
        parameters: {
            params: {
                limit: 6,
                order: {
                    column: 'created_at',
                    desc: true,
                },
            },
        },
        searches: {
            columns: ['title', 'content'],
            placeholder: 'Titre, contenu...',
        },
        orders: [
            {
                label: 'Titre de publication',
                value: 'title',
            },
            {
                label: 'Date de création',
                value: 'created_at',
            },
        ],
        filters: [
            {
                label: 'Publiée',
                value: {
                    column: 'published',
                    operator: '=',
                    value: 1,
                },
            },
            {
                label: 'Non publiée',
                value: {
                    column: 'published',
                    operator: '=',
                    value: 0,
                },
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
