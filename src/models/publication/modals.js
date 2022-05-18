import React from 'react';

export default {
    destroy: (key) => {
        const { title } = key;
        return {
            title: 'Supprimer la publication',
            content: (
                <div>
                    <p className="message">Confirmer la suppression de la publication</p>
                    <p className="complement">
                        {
                            title.length > 30 ? `${title.substring(0, 30)}...` : title
                        }
                    </p>
                </div>    
            )
        }
    },
};
