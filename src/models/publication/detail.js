
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { getImage } from '../../utilities/functions';


export default (key) => {
    const { images } = key;

    const slideImages = images.data.map(image => ({
        url: getImage(image, 'normal'),
    }));

    return (
        <div className="detail-publication">
            <div>
                <Carousel>
                    {slideImages.map((slideImage, index) => (
                        <div key={index.toString()}>
                            <img src={slideImage.url} alt="" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};
