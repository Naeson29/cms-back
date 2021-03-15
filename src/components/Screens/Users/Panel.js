import React, { Component } from 'react';
import 'react-datetime/css/react-datetime.css';

class Panel extends Component {
    render() {
        return (
            <div className="content-panel" ref={(el) => { this.content = el; }}>
                <div className="content" />
            </div>
        );
    }
}

export default Panel;
