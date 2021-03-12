import React from 'react';

import Dashboard from '../containers/Screens/Dashboard/Index';

import Users from '../containers/Screens/Users/Index';

const routes = [
	//TODO create others routes

	// Dashboard
	{ exact: true, path: '/', name: 'Dashboard', component: Dashboard },


    // Users
	{ exact: true, path: '/user', name: 'Users', component: Users },
];
export default routes;

export const authentication = {
    login: { path: '/login', name: 'Login' }
};