import React from 'react';

// Panels & Actions
import PanelUser from '../containers/Screens/Users/Panel';
import EditUser from '../components/Screens/Users/Edit';

const Panels = {
    user: {
        panel: PanelUser,
        show: '',
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
