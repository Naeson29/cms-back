import React, { Component } from 'react';
import { connect } from 'react-redux';
import Functions from '../../../containers/Features/PanelFunction';
import 'react-datetime/css/react-datetime.css';

class PanelEvent extends Component {
    render() {
        return (
            <div className="content-panel" ref={(el) => { this.content = el; }}>
                <div className="content" />
            </div>
        );
    }
}

export default connect(() => ({}), Functions)(PanelEvent);
