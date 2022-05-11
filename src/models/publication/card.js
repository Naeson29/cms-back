
import React from 'react';
import moment from 'moment';
import { HiCheckCircle } from 'react-icons/hi';
import {
    getImage,
    truncate,
} from '../../utilities/functions';

export default (key) => {
    const { title, content, images, created, user, published } = key;
    const date = `${moment(created).format('DD.MM.YYYY')} à ${moment(created).format('HH[h]mm')}`;
    const userdata = user.data;

    return (
        <div className="card-publication">
            <div className="header-section">
                <p className="title">{title}</p>
                <p className="published">
                    <HiCheckCircle className={`icon ${published ? 'active' : ''}`} />
                    {!published ? 'Non publiée' : 'Publiée'}
                </p>
            </div>
            <p className="content">{truncate(content, 200)}</p>
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
            <div className="info-section">
                <p className="created-at">
                    {'Crée par '}
                    <span>{`${userdata.first_name} ${userdata.last_name}`}</span>
                    {' le '}
                    {date}
                </p>
            </div>
        </div>
    );
};
