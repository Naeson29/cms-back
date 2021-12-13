import {
    user,
    publication,
} from '../models';
import { setContainer } from '../containers';

const panel = true;
const modal = true;

const index = [{
    exact: true,
    path: '/',
    name: 'Dashboard',
    component: setContainer(),
    id: 1,
},
{
    exact: true,
    path: '/user',
    name: 'Users',
    component: setContainer({
        model: user,
        panel,
        modal,
    }),
    id: 2,
},
{
    exact: true,
    path: '/publication',
    name: 'Publication',
    component: setContainer({
        model: publication,
        panel,
        modal,
    }),
    id: 3,
}];

export default index;

export const auth = {
    login: {
        path: '/login', name: 'Login',
    },
};
