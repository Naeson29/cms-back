import { userActions } from '../../actions';
import card from './card';
import form from './form';
import panels from './panels';
import modals from './modals';
import detail from './detail';

const name = 'user';

const paramsList = {
    params: {
        limit: 50,
        order: {
            column: 'first_name',
        },
    },
};

const { creators } = userActions();

export default {
    name,
    card,
    detail,
    form,
    modals,
    panels,
    paramsList,
    creators,
};
