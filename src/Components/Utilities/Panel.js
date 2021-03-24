import React from 'react';

const actions = {
    show: {
        open: true,
        action: 'show',
    },
    create: {
        open: true,
        action: 'create',
    },
    update: {
        open: true,
        action: 'update',
    },
};

const isOpen = panel => (panel.open);

const getContent = (panel, panels) => (!panel.action ? <div /> : panels[panel.action]);

export {
    actions,
    isOpen,
    getContent,
};
