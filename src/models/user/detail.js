
import React from 'react';
import moment from 'moment';
import { getImage } from '../../utilities/functions';

export default (key) => {
    const { first_name, last_name } = key;
    return (
        <div className="detail-user">
            <div className="image">
                <img src={key.image ? getImage(key.image, 'medium') : './img/avatar.png'} alt="" />
            </div>
            <div className="infos">
                <p className="name">{`${first_name} ${last_name}`}</p>
                <p className="info created">{`Crée le ${moment(key.createdAt).format('D MMMM YYYY')}`}</p>
                <p className="info email">{key.email}</p>
            </div>
        </div>
    );
};
