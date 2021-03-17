import Dashboard from '../Containers/Screens/Dashboard/Index';
import Users from '../Containers/Screens/User';

const index = [
    // Dashboard
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
