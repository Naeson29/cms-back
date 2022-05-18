const createModal = ({ params = {}, title = '', content = null, context = '' } = {}) => ({
    open: true,
    [context]: true,
    params,
    title,
    content,  
});

export default {
    destroy: (key, modal) => {
        const destroy = modal(key);
        const { title, content } = destroy;
        return createModal({
            params: {
                id: key.id,
            },
            context: 'destroy',
            title,
            content,            
        });
    },
    error: content => createModal({
        content,
        context: 'error',
    }),
};