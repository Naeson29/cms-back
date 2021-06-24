import { models } from '../models';
import { setContainer } from '../containers';

const { user } = models;
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
}];

export default index;

export const authentication = {
    login: {
        path: '/login', name: 'Login',
    },
};
