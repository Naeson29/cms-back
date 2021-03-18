import React from 'react';
import PropTypes from 'prop-types';
import {
    HiArrowCircleLeft, HiPlusCircle,
} from 'react-icons/hi';

// Feature
import Button from "./Button";

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderScreen = (props) => {
    const { type, openPanel, closePanel, panel, title } = props;

    const context = {
        list: {
            action: () => openPanel(panel),
            icon: HiPlusCircle,
        },
        panel: {
            action: () => closePanel(),
            icon: HiArrowCircleLeft,
        },
    };

    return (
        <div className="header-screen">
            <div className="content left">
                <Button
                    {...context[type]}
                    className={'button'}
                />
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
