import React, { Component } from 'react';
import Loading from 'react-loading-components';
import colors from '../../utils/Color';

class Loader extends Component {
    render() {
        return (
            <div className="loading-list">
                <Loading type="oval" width={80} height={80} fill={colors.primary_color} className="loading" />
            </div>
        );
    }
}

export default Loader;
