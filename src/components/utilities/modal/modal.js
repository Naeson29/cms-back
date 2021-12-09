const createModal = ({ params = {}, content = null, context = '' } = {}) => ({
    open: true,
    content,
    params,
    [context]: true,
});

const actions = {
    destroy: (key, content) => createModal({
        params: {
            id: key.id,
        },
        content: content(key),
        context: 'destroy',
    }),
    error: content => createModal({
        content,
        context: 'error',
    }),
};

const isOpen = modal => (modal.open);

export default {
    actions,
    isOpen,
};
