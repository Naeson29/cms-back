import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    HiArrowCircleLeft, HiPlusCircle,
} from 'react-icons/hi';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderScreen extends Component {
    render() {
        const { type, openPanel, closePanel, panel, title } = this.props;

        let button;
        switch (type) {
        case 'list':
            button = (
                <button
                    onClick={() => openPanel(panel)}
                    className="add"
                    type="button"
                >
                    <HiPlusCircle className="icon" />
                </button>
            );
            break;

        case 'panel':
            button = (
                <button
                    onClick={() => closePanel()}
                    className="close-panel"
                    type="button"
                >
                    <HiArrowCircleLeft className="icon" />
                </button>
            );
            break;

        default:
            button = (<div />);
        }

        return (
            <div className="header-screen">
                <div className="content left">
                    {button}
                    <span>{title}</span>
                </div>
                <div className="content right" />
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
    openPanel: () => {},
    closePanel: () => {},
    title: '',
    panel: '',
};

export default HeaderScreen;
