import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import colors from '../../utils/Color';

// eslint-disable-next-line react/prefer-stateless-function
class Loading extends Component {
    render() {
        const { contextClass } = this.props;
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
    }
}

Loading.propTypes = {
    contextClass: PropTypes.string,
};

Loading.defaultProps = {
    contextClass: 'loading-fragment',
};

export default Loading;
