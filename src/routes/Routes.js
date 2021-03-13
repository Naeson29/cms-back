import Dashboard from '../containers/Screens/Dashboard/Index';

import Users from '../containers/Screens/Users/Index';

const routes = [
    // TODO create others routes

    // Dashboard
    {
        exact: true, path: '/', name: 'Dashboard', component: Dashboard, id: 1,
    },


    // Users
    {
        exact: true, path: '/user', name: 'Users', component: Users, id: 2,
    },
];
export default routes;

export const authentication = {
    login: {
        path: '/login', name: 'Login',
    },
};
