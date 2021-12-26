
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { getImage } from '../../utilities/functions';


export default (key) => {
    const { images } = key;

    const renderItems = images.data.map((image, index) => (
        <div className="slide-item" key={`ìtem-${index.toString()}`} style={{ backgroundImage: `url(${getImage(image, 'normal')})` }} />
    ));

    const renderThumbs = () => images.data.map((image, index) => (
        <div className="slide-thumb" key={`thumb-${index.toString()}`} style={{ backgroundImage: `url(${getImage(image, 'thumb')})` }} />
    ));

    return (
        <div className="detail-publication">
            <div className="slide-publication">
                <Carousel
                    showStatus={false}
                    showIndicators={false}
                    renderThumbs={renderThumbs}
                >
                    {renderItems}
                </Carousel>
            </div>
        </div>
    );
};
