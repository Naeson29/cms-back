import React from 'react';

// Components
import Edit from '../Screens/Users/Edit';
import Show from '../Screens/Users/Show';

// Functions
import { getImage } from '../../Utilities/Functions';

// Panels
const panels = {
    show: Show,
    create: Edit,
    update: Edit,
};

// Modals
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

// Card
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

// Form

const form = {
    left: [
        {
            html: 'input',
            label: 'Prénom',
            placeholder: 'Pierre...',
            name: 'firstName',
            require: true,
        },
        {
            html: 'input',
            label: 'Nom',
            placeholder: 'Richard...',
            name: 'lastName',
            require: true,
        },
    ],
};

export default {
    panels,
    modals,
    card,
    form,
};
