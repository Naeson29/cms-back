import React from 'react';

// Panel
import Panel from '../components/Screens/Commons/Panel';

// User
import EditUser from '../components/Screens/Users/Edit';
import ShowUser from '../components/Screens/Users/Show';

/**
 *
 * @type {{CREATE: string, UPDATE: string, SHOW: string}}
 */
const Actions = {
    SHOW: 'show',
    CREATE: 'create',
    UPDATE: 'update',
};

const Type = {
    USER: 'user',
};

const PanelComponents = {
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
const PanelContainer = (panel, detail) => {
    const { type, action } = panel;
    const Component = PanelComponents[type][action];

    return (
        <Panel {...panel}>
            <Component detail={(action !== Actions.CREATE) ? detail : {}} />
        </Panel>
    );
};

export {
    Actions, Type, PanelContainer,
};