import React from 'react';

// Components
import Edit from '../Screens/Commons/Edit';
import Show from '../Screens/Commons/Show';

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
        const { first_name, last_name } = key;
        return (
            <div className="card-text">
                <p className="message">{'Confirmer la suppression de l\'utilisateur'}</p>
                <p className="complement">{`${first_name} ${last_name}`}</p>
            </div>
        );
    },
};

// Card
const card = (key) => {
    const { first_name, last_name, image } = key;
    return (
        <div className="card-user">
            <div
                style={{
                    backgroundImage: `url(${image ? getImage(image, 'thumb') : './img/avatar.png'})`,
                }}
                className="image"
            />
            <p className="name">{`${first_name} ${last_name}`}</p>
        </div>
    );
};

// Form
const form = {
    fields: [
        {
            html: 'input',
            label: 'Prénom',
            placeholder: 'Pierre...',
            name: 'first_name',
            require: true,
        },
        {
            html: 'input',
            label: 'Nom',
            placeholder: 'Richard...',
            name: 'last_name',
            require: true,
        },
        {
            html: 'input',
            label: 'Email',
            placeholder: 'exemple@mail.fr...',
            name: 'email',
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
