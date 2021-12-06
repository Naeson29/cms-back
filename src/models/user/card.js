
import React from 'react';
import { getImage } from '../../utilities/functions';

export default (key) => {
    const { first_name, last_name, role_name, image } = key;
    return (
        <div className="card-user">
            <div
                style={{
                    backgroundImage: `url(${image ? getImage(image, 'thumb') : './img/avatar.png'})`,
                }}
                className="image"
            />
            <div className="infos">
                <p className="name">{`${first_name} ${last_name}`}</p>
                <p className="role">{role_name}</p>
            </div>
        </div>
    );
};
