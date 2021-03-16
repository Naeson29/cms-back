import React from 'react';

// Panel
import Panel from '../components/Screens/Commons/Panel';

// User
import EditUser from '../components/Screens/Users/Edit';
import ShowUser from '../components/Screens/Users/Show';

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

const PanelContainer = (panel, detail) => {
    const {type, action} = panel;
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
