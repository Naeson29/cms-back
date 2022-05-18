import React from 'react';

export default {
    destroy: (key) => {
        const { first_name, last_name } = key;
        return {
            content: (
                <div className="card-text">
                    <p className="message">Voulez-vous vraiment supprimer cet utilisateur ?</p>
                    <p className="complement">{`${first_name} ${last_name}`}</p>
                </div>
            ),
        };
    },
};
