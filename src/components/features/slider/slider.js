import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { getImage } from '../../../utilities/functions';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Slider = (props) => {
    const { images, className, showIndicators, showStatus } = props;

    const renderItems = images.data.map((image, index) => (
        <div className="slide-item" key={`ìtem-${index.toString()}`} style={{ backgroundImage: `url(${getImage(image, 'normal')})` }} />
    ));

    const renderThumbs = () => images.data.map((image, index) => (
        <div className="slide-thumb" key={`thumb-${index.toString()}`} style={{ backgroundImage: `url(${getImage(image, 'thumb')})` }} />
    ));

    return (
        <div className={className}>
            <Carousel
                showStatus={showStatus}
                showIndicators={showIndicators}
                renderThumbs={renderThumbs}
            >
                {renderItems}
            </Carousel>
        </div>
    );
};

Slider.propTypes = {
    images: PropTypes.oneOfType([PropTypes.array]),
    className: PropTypes.string,
    showIndicators: PropTypes.bool,
    showStatus: PropTypes.bool,
};

Slider.defaultProps = {
    images: [],
    className: '',
    showIndicators: false,
    showStatus: false,
};

export default Slider;
