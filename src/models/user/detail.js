
import React from 'react';
import moment from 'moment';
import { getImage } from '../../utilities/functions';

export default (key) => {
    const { first_name, last_name, role_name, email, createdAt, image = false } = key;
    return (
        <div className="detail-user">
            <div className="image">
                <img src={image ? getImage(image.data, 'medium') : './img/avatar.png'} alt="" />
            </div>
            <div className="infos">
                <p className="name">{`${first_name} ${last_name}`}</p>
                <p className="info created">{`Crée le ${moment(createdAt).format('D MMMM YYYY')}`}</p>
                <p className="info email">{email}</p>
                <p className="role">{role_name}</p>
            </div>
        </div>
    );
};
