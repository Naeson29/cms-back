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

    const leftButton = {
        list: {
            action: () => openPanel(panel),
            Icon: HiPlusCircle,
        },
        panel: {
            action: () => closePanel(),
            Icon: HiArrowCircleLeft,
        },
    };

    const { action, Icon } = leftButton[type];

    return (
        <div className="header-screen">
            <div className="content left">
                <button
                    onClick={action}
                    className="add"
                    type="button"
                >
                    <Icon className="icon" />
                </button>
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
    type: 'list',
    title: '',
    panel: {},
    openPanel: () => {},
    closePanel: () => {},
};

export default HeaderScreen;
