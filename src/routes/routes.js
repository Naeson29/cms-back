import { setContainer } from '../containers';

const routes = (models) => {
    const modelRoutes = Object.keys(models).filter(key => !!models[key].name && !!models[key].routeName).map(model => models[model]);

    const panel = true;
    const modal = true;

    let id = 1;

    return [{
        exact: true,
        path: '/',
        name: 'Dashboard',
        component: setContainer(),
        id,
    },
    ...modelRoutes.map((model) => {
        const { name, routeName } = model;
        id += 1;
        return {
            exact: true,
            path: `/${name}`,
            name: routeName,
            component: setContainer({
                model,
                panel,
                modal,
            }),
            id,
        };
    })];
};

export default routes;

export const auth = {
    login: {
        path: '/login', name: 'Login',
    },
};
