import { BiNews } from 'react-icons/bi';
import { model } from '../model';
import {
    defaultActions,
} from '../../actions';
import list from './list';
import card from './card';
import form from './form';
import modals from './modals';
import detail from './detail';

const name = 'publication';

export default {

    ...model,

    name,

    route: 'publications',

    creators: defaultActions(name),

    menu: {
        label: 'Publications',
        icon: BiNews,
    },

    list,

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
