import { BiNews } from 'react-icons/bi';
import {
    defaultActions,
} from '../../actions';
import card from './card';
import form from './form';
import panels from './panels';
import modals from './modals';
import detail from './detail';

const name = 'publication';
const { creators } = defaultActions(name);

export default {
    name,
    creators,
    form,
    modals,
    panels,

    path: 'publications',
    routeName: 'Publications',
    menuLabel: 'Publications',

    list: {
        params: {
            limit: 6,
            order: {
                column: 'created_at',
                desc: true,
            },
        },
    },
    search: {
        columns: ['title', 'content'],
        placeholder: 'Titre, contenu...',
    },
    order: [
        {
            label: 'Titre de publication',
            value: 'title',
        },
        {
            label: 'Date de création',
            value: 'created_at',
        },
    ],
    filter: [
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
    actions: [
        { action: 'index' },
        { action: 'show' },
        { action: 'update' },
    ],
    renders: {
        card: {
            type: 'medium',
            component: card,
        },
        detail,
        menuIcon: BiNews,
    },
};
