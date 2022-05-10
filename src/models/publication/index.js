import { BiNews } from 'react-icons/bi';
import {
    defaultActions,
} from '../../actions';
import card from './card';
import form from './form';
import panels from './panels';
import modals from './modals';
import detail from './detail';

// strings
const name = 'publication';
const path = 'publications';
const routeName = 'Publications';
const menuLabel = 'Publications';
const menuIcon = BiNews;
const cardType = 'medium';

// creators
const { creators } = defaultActions(name);


// list params
const paramsList = {
    params: {
        limit: 50,
        order: {
            column: 'created_at',
            desc: true,
        },
    },
};

const paramSearch = {
    columns: ['title', 'content'],
    placeholder: 'Titre, contenu...',
};

const orderColumns = [
    {
        label: 'Titre de publication',
        value: 'title',
    },
    {
        label: 'Date de création',
        value: 'created_at',
    },
];

const filterColumns = [
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
];

export default {
    name,
    routeName,
    path,
    menuLabel,
    menuIcon,
    card,
    cardType,
    detail,
    form,
    modals,
    panels,
    paramsList,
    paramSearch,
    orderColumns,
    filterColumns,
    creators,
};
