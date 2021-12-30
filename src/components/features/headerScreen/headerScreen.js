import React from 'react';
import PropTypes from 'prop-types';
import {
    HiArrowCircleLeft, HiPlusCircle,
} from 'react-icons/hi';

// Feature
import {
    Button,
    Filter,
} from '..';

// Utils
import { panelUtility } from '../../utilities';

const {
    isOpen,
    actions,
} = panelUtility;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderScreen = (props) => {
    const { openPanel, closePanel, state, title, panels } = props;
    const { panel } = state;

    return (
        <div className="header-screen">
            <div className="content left">
                {
                    (panels && panels.create) && (
                        <Button
                            action={() => (isOpen(panel) ? closePanel() : openPanel(actions.create))}
                            icon={isOpen(panel) ? HiArrowCircleLeft : HiPlusCircle}
                            className="button add"
                        />
                    )
                }
                <span>{title}</span>
            </div>
            <div className="content right">
                <Filter />
            </div>
        </div>
    );
};

HeaderScreen.propTypes = {
    title: PropTypes.string,
    state: PropTypes.oneOfType([PropTypes.object]),
    openPanel: PropTypes.func,
    closePanel: PropTypes.func,
    panels: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

HeaderScreen.defaultProps = {
    title: '',
    state: {},
    openPanel: () => {},
    closePanel: () => {},
    panels: false,
};

export default HeaderScreen;
