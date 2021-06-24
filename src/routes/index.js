import { models } from '../models';
import { setScreenContainer } from '../containers';
import Dashboard from '../containers/screens/dashboard';

const { USER } = models;

const index = [
    {
        exact: true, path: '/', name: 'Dashboard', component: Dashboard, id: 1,
    },
    {
        exact: true, path: '/user', name: 'Users', component: setScreenContainer(USER), id: 2,
    },
];
export default index;

export const authentication = {
    login: {
        path: '/login', name: 'Login',
    },
};
