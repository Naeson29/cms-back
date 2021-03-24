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
    const { className } = props;
    return (
        <div className={`loading ${className}`}>
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
    className: PropTypes.string,
};

Loading.defaultProps = {
    className: 'loading-fragment',
};

export default Loading;
