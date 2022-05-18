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
        return createModal({
            params: {
                id: key.id,
            },
            context: 'destroy',
            title: destroy.title,
            content: destroy.content,            
        });
    },
    error: content => createModal({
        content,
        context: 'error',
    }),
};