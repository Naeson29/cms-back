import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {HiOutlineChevronLeft, HiPlusCircle} from "react-icons/hi";

// eslint-disable-next-line react/prefer-stateless-function
class HeaderScreen extends Component {
    render() {
        const { type, openPanel, closePanel, panel, title } = this.props;

        return (
            <div className="header-screen">
                <div className={'content left'}>
                    {
                        type === 'panel' &&
                        <button
                            onClick={() => closePanel()}
                            className="close-panel"
                            type="button"
                        >
                            <HiOutlineChevronLeft className="icon" />
                        </button>
                    }
                    <span>{title}</span>
                </div>
                <div className={'content center'}>
                    <button
                        onClick={() => type === 'list' ? openPanel(panel) : ()=> {}}
                        className="add"
                        type="button"
                    >
                        <HiPlusCircle className="icon" />
                    </button>
                </div>
                <div className={'content right'}/>
            </div>
        );
    }
}

HeaderScreen.propTypes = {
    type: PropTypes.string,
    openPanel: PropTypes.func,
    closePanel: PropTypes.func,
    title: PropTypes.string,
    panel: PropTypes.string,
};

HeaderScreen.defaultProps = {
    type: '',
    openPanel: ()=> {},
    closePanel: ()=> {},
    title: '',
    panel: '',
};

export default HeaderScreen;
