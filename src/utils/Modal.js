import React from "react";


const params ={
    user : {

    }
}

const getModal = (model)=> {

}


const deleteUser = key => {
    const {lastName, firstName, id} = key;
    return {
        type: Modal.delete,
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
    deleteUser,
};
