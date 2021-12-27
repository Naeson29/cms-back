
import React from 'react';
import moment from 'moment';
import {
    getImage,
    truncate,
} from '../../utilities/functions';

export default (key) => {
    const { title, content, images, created } = key;
    const date = `${moment(created).format('DD/MM/YYYY')} à ${moment(created).format('HH[h]mm')}`;

    return (
        <div className="card-publication">
            <div>
                <p className="title">
                    {title}
                    {' '}
                    <span>{date}</span>
                </p>
                <p className="content">{truncate(content, 200)}</p>
            </div>
            {
                images && (
                    <div
                        style={{
                            backgroundImage: `url(${getImage(images.data[0], 'medium')})`,
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
