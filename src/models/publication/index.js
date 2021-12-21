import { HiNewspaper } from 'react-icons/hi';
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

const menuIcon = HiNewspaper;

const paramsList = {
    params: {
        limit: 50,
    },
};

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
    creators,
};
