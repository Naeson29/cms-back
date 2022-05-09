
import React from 'react';
import moment from 'moment';
import { HiCheckCircle } from 'react-icons/hi';
import {
    getImage,
    truncate,
    initials,
} from '../../utilities/functions';

export default (key) => {
    const { title, content, images, created, user, published } = key;
    const date = `${moment(created).format('DD.MM.YYYY')} à ${moment(created).format('HH[h]mm')}`;
    const userdata = user.data;
    const userImage = userdata.image;

    return (
        <div className="card-publication">
            <div className="title-section">
                <p className="title">
                    <span>{title}</span>
                    <span className="published">
                        <HiCheckCircle className={`icon ${published ? 'active' : ''}`} />
                        {!published ? 'Non publiée' : 'Publiée'}
                    </span>
                </p>
                <div className="user-section">
                    <div
                        style={{
                            backgroundImage: `url(${userImage ? getImage(userImage.data, 'thumb') : './img/avatar.png'})`,
                        }}
                        className="image-user"
                    />
                    <p className="initials">{`${initials(userdata.first_name)}.${initials(userdata.last_name)}`}</p>
                </div>
            </div>
            <p className="content">{truncate(content, 200)}</p>
            <p className="created-date">{date}</p>
            {
                images && (
                    <div
                        style={{
                            backgroundImage: `url(${getImage(images.data[0], 'normal')})`,
                        }}
                        className="image"
                    >
                        {
                            images.data.length > 1 && (
                                <div className="numberMore">
                                    +
                                    {' '}
                                    {images.data.length - 1}
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};
