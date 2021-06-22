import Dashboard from '../containers/screens/dashboard';
import Users from '../containers/screens/user';

const index = [
    // dashboard
    {
        exact: true, path: '/', name: 'Dashboard', component: Dashboard, id: 1,
    },
    // Users
    {
        exact: true, path: '/user', name: 'Users', component: Users, id: 2,
    },
];
export default index;

export const authentication = {
    login: {
        path: '/login', name: 'Login',
    },
};
