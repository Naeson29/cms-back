import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Functions from '../../../containers/Features/PanelFunction';
import 'react-datetime/css/react-datetime.css';

class Panel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-panel" ref={(el) => { this.content = el; }}>
                <div className="content" />
            </div>
        );
    }
}

Panel.propTypes = {
    close: PropTypes.func,
};

export default connect(() => ({}), Functions)(Panel);
