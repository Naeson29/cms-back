const createModal = (params, content) => ({
    open: true,
    content,
    params,
});

const actions = {
    destroy: (key, content) => createModal({
        id: key.id,
    }, content(key)),
};

const isOpen = modal => (modal.open);

export {
    actions,
    isOpen,
};
