const Modal = {
    DELETE: 'delete',
};

/**
 *
 * @param key
 * @returns {{type: string, params: {destroy: {action: string, id}, message: string, complement: string}}}
 */
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
