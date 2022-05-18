import React from 'react';

export default {
    destroy: (key) => {
        const title = key.title.length > 30 ? `"${key.title.substring(0, 30)}..."` : `"${key.title}"`;
        return {
            content: (
                <div>
                    <p className="message">Voulez-vous vraiment supprimer cette publication ?</p>
                    <p className="complement">
                        { title }
                    </p>
                </div>
            ),
        };
    },
};
