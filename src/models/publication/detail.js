
import React from 'react';
import { Slider } from '../../components/features';

export default (key) => {
    const { images } = key;

    return (
        <div className="detail-publication">
            <Slider images={images} className="slide-publication" />
        </div>
    );
};
