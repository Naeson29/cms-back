import { defaultActions } from '../../actions';
import card from './card';
import form from './form';
import panels from './panels';
import modals from './modals';
import detail from './detail';

const name = 'publication';
const path = 'publications';
const routeName = 'Publications';

const paramsList = {
    params: {
        limit: 50,
    },
};

const { creators } = defaultActions(name);

export default {
    name,
    routeName,
    path,
    card,
    detail,
    form,
    modals,
    panels,
    paramsList,
    creators,
};
