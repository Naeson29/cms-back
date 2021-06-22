import React from 'react';
import PropTypes from 'prop-types';
import {
    HiArrowCircleLeft, HiPlusCircle,
} from 'react-icons/hi';

// Feature
import Button from './button';

// Utils
import {
    actions, isOpen,
} from '../utilities/panel';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderScreen = (props) => {
    const { openPanel, closePanel, state, title } = props;
    const { panel } = state;

    return (
        <div className="header-screen">
            <div className="content left">
                <Button
                    action={() => (isOpen(panel) ? closePanel() : openPanel(actions.create))}
                    icon={isOpen(panel) ? HiArrowCircleLeft : HiPlusCircle}
                    className="button"
                />
                <span>{title}</span>
            </div>
            <div className="content right" />
        </div>
    );
};

HeaderScreen.propTypes = {
    title: PropTypes.string,
    state: PropTypes.oneOfType([PropTypes.object]),
    openPanel: PropTypes.func,
    closePanel: PropTypes.func,
};

HeaderScreen.defaultProps = {
    title: '',
    state: {},
    openPanel: () => {},
    closePanel: () => {},
};

export default HeaderScreen;
