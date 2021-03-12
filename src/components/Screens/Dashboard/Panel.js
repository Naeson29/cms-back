import React, { Component }  from 'react';
import {connect}             from 'react-redux';
import Functions        from '../../../containers/Features/PanelFunction';
import {Button}              from 'reactstrap';
import PropTypes             from 'prop-types';
import 'react-datetime/css/react-datetime.css';

class PanelEvent extends Component
{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="content-panel" ref={(el) => { this.content = el; }}>
                <div className="content">

                </div>
            </div>
        );
    }
}

PanelEvent.propTypes = {
    close : PropTypes.func,
};

export default connect(() => {return {};}, Functions)(PanelEvent);