export const Modal = {
    DELETE  : 'delete'
}

export const deleteUser = (key) => ({
    type : Modal.DELETE,
    params : {
        message : 'Confirmer la suppression de l\'utilisateur',
        complement : `${key.first_name} ${key.last_name}`,
        destroy : {
            action : 'User',
            id : key.id
        }
    }
});