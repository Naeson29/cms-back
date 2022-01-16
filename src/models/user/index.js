import { ImUsers } from 'react-icons/im';
import { userActions } from '../../actions';
import card from './card';
import form from './form';
import panels from './panels';
import modals from './modals';
import detail from './detail';

const name = 'user';

const path = 'users';

const routeName = 'Users';

const menuLabel = 'Utilisateurs';

const menuIcon = ImUsers;

const paramsList = {
    params: {
        limit: 50,
        order: {
            column: 'first_name',
        },
    },
};

const paramSearch = {
    column: 'first_name',
};

const orderColumns = [
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
];

const { creators } = userActions();

export default {
    name,
    routeName,
    path,
    menuLabel,
    menuIcon,
    card,
    detail,
    form,
    modals,
    panels,
    paramsList,
    paramSearch,
    orderColumns,
    creators,
};
