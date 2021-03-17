import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import colors from '../Utilities/Color';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Loading = (props) => {
    const { contextClass } = props;
    return (
        <div className={`loading ${contextClass}`}>
            <Loader
                type="ThreeDots"
                width={80}
                height={80}
                color={colors.loadingColor}
            />
        </div>
    );
};

Loading.propTypes = {
    contextClass: PropTypes.string,
};

Loading.defaultProps = {
    contextClass: 'loading-fragment',
};

export default Loading;
