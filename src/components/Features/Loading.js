import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import colors from '../../utils/Color';
import PropTypes from "prop-types";
import Index from "../Screens/Users/Index";

// eslint-disable-next-line react/prefer-stateless-function
class Loading extends Component {
    render() {
        const {contextClass='loading-fragment'} = this.props;
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

Index.propTypes = {
    contextClass: PropTypes.string,
};

Index.defaultProps = {
    contextClass: ''
};

export default Loading;
