const getContent = (model, obj) => {
    const params = {
        user: ({ firstName, lastName }) => ({
            message: 'Confirmer la suppression de l\'utilisateur',
            complement: `${firstName} ${lastName}`,
        }),
    };
    return params[model](obj);
};

const setModalDelete = (model, obj) => ({
    open: true,
    params: {
        ...getContent(model, obj),
        id: obj.id,
    },
});

export default setModalDelete;
