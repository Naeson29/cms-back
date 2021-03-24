import React from 'react';

import Edit from '../Screens/Users/Edit';
import Show from '../Screens/Users/Show';
import { getImage } from '../../Utilities/Functions';

const panels = {
    show: Show,
    create: Edit,
    update: Edit,
};

const modals = {
    destroy: (key) => {
        const { firstName, lastName } = key;
        return (
            <div className="card-text">
                <p className="message">{'Confirmer la suppression de l\'utilisateur'}</p>
                <p className="complement">{`${firstName} ${lastName}`}</p>
            </div>
        );
    },
};

const card = (key) => {
    const { firstName, lastName, image } = key;
    return (
        <div className="card-user">
            <div
                style={{
                    backgroundImage: `url(${image ? getImage(image, 'thumb') : './img/avatar.png'})`,
                }}
                className="image"
            />
            <p className="name">{`${firstName} ${lastName}`}</p>
        </div>
    );
};

export default {
    panels,
    modals,
    card,
};
