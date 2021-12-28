
import React from 'react';
import moment from 'moment';
import { Slider } from '../../components/features';

export default (key) => {
    const { images, title, content, created } = key;
    const date = `${moment(created).format('DD/MM/YYYY')} à ${moment(created).format('HH[h]mm')}`;

    return (
        <div className="detail-publication">
            <div className="body">
                <p className="title">
                    {title}
                    {' '}
                    <span>{date}</span>
                </p>
                <p>{content}</p>
            </div>
            <div className="options">
                {
                    images && (
                        <div>
                            <p className="title">Médias</p>
                            <Slider images={images} className="slide-publication" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};
