import React from 'react';

// User
import PanelUser from '../containers/Screens/Users/Panel';
import EditUser from '../components/Screens/Users/Edit';
import ShowUser from '../components/Screens/Users/Show';

const Panels = {
    user: {
        panel: PanelUser,
        show: ShowUser,
        create: EditUser,
        update: EditUser,
    },
};

const Actions = {
    SHOW: 'show',
    CREATE: 'create',
    UPDATE: 'update',
};

const Type = {
    USER: 'user',
};

const PanelContainer = (panel) => {
    const Panel = Panels[panel.label].panel;
    const Component = Panels[panel.label][panel.action];

    return (
        <Panel {...panel}>
            <Component />
        </Panel>
    );
};

export {
    Actions, Type, PanelContainer,
};
