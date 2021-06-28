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
const isOpen = (panel = {}) => (panel.open);
const getContent = (panel, panels) => (!panel.action ? null : panels[panel.action]);

export default {
    actions,
    isOpen,
    getContent,
};
