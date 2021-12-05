import React from 'react';

export default {
    destroy: (key) => {
        const { first_name, last_name } = key;
        return (
            <div className="card-text">
                <p className="message">{'Confirmer la suppression de l\'utilisateur'}</p>
                <p className="complement">{`${first_name} ${last_name}`}</p>
            </div>
        );
    },
};
