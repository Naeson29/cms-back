const Modal = {
    DELETE: 'delete',
};

const deleteUser = key => ({
    type: Modal.DELETE,
    params: {
        message: 'Confirmer la suppression de l\'utilisateur',
        complement: `${key.firstName} ${key.last_name}`,
        destroy: {
            action: 'User',
            id: key.id,
        },
    },
});

export {
    Modal,
    deleteUser,
};
