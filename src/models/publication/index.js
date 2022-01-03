import { BiNews } from 'react-icons/bi';
import { defaultActions } from '../../actions';
import card from './card';
import form from './form';
import panels from './panels';
import modals from './modals';
import detail from './detail';

const name = 'publication';

const path = 'publications';

const routeName = 'Publications';

const menuLabel = 'Publications';

const menuIcon = BiNews;

const paramsList = {
    params: {
        limit: 50,
        order: {
            column: 'created_at',
            desc: true,
        },
    },
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

const cardType = 'medium';

const { creators } = defaultActions(name);

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
    orderColumns,
    creators,
};
