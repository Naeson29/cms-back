import React from 'react';

// Panel
import Panel from '../components/Screens/Commons/Panel';

// User
import EditUser from '../components/Screens/Users/Edit';
import ShowUser from '../components/Screens/Users/Show';

/**
 *
 * @type {{show: string, create: string, update: string}}
 */
const actions = {
    show: 'show',
    create: 'create',
    update: 'update',
};

const setPanels = (model) => ({
    show : {
        model,
        action : actions.show
    },
    create : {
        model,
        action : actions.create
    },
    update : {
        model,
        action : actions.update
    }
});

const panelComponents = {
    user: {
        show: ShowUser,
        create: EditUser,
        update: EditUser,
    },
};

/**
 *
 * @param panel
 * @param detail
 * @returns {JSX.Element}
 * @constructor
 */
const panelContainer = (panel, detail) => {
    const { model, action } = panel;
    const Component = panelComponents[model][action];

    return (
        <Panel {...panel}>
            <Component detail={(action !== actions.create) ? detail : {}} />
        </Panel>
    );
};

export {
    setPanels, panelContainer,
};
