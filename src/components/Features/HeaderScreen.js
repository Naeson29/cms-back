import React from 'react';
import PropTypes from 'prop-types';
import {
    HiArrowCircleLeft, HiPlusCircle,
} from 'react-icons/hi';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderScreen = (props) => {
    const { type, openPanel, closePanel, panel, title } = props;

    const Button = () => {
        switch (type) {
        case 'list': {
            return (
                <button
                    onClick={() => openPanel(panel)}
                    className="add"
                    type="button"
                >
                    <HiPlusCircle className="icon" />
                </button>
            );
        }
        case 'panel': {
            return (
                <button
                    onClick={() => closePanel()}
                    className="close-panel"
                    type="button"
                >
                    <HiArrowCircleLeft className="icon" />
                </button>
            );
        }
        default:
            return (<div />);
        }
    };

    return (
        <div className="header-screen">
            <div className="content left">
                <Button />
                <span>{title}</span>
            </div>
            <div className="content right" />
        </div>
    );
};

HeaderScreen.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    panel: PropTypes.oneOfType([PropTypes.object]),
    openPanel: PropTypes.func,
    closePanel: PropTypes.func,
};

HeaderScreen.defaultProps = {
    type: '',
    title: '',
    panel: {},
    openPanel: () => {},
    closePanel: () => {},
};

export default HeaderScreen;
