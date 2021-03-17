const Modal = {
    DELETE: 'delete',
};

/**
 *
 * @param key
 * @returns {{type: string, params: {destroy: {action: string, id}, message: string, complement: string}}}
 */
const deleteUser = key => {
    const {lastName, firstName, id} = key;
    return {
        type: Modal.DELETE,
        params: {
            message: 'Confirmer la suppression de l\'utilisateur',
            complement: `${firstName} ${lastName}`,
            destroy: {
                action: 'User',
                id
            },
        },
    }
};

export {
    Modal,
    deleteUser,
};
