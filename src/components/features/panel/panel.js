import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Panel = (props) => {
    const { state } = props;
    const { panel = {} } = state;

    return (
        <div className={`panel-container right ${panel.open ? 'open' : ''}`}>
            {
                panel.open
                && (
                    <div className="panel">
                        <div className="content-panel">
                            { panel.content }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

Panel.propTypes = {
    state: PropTypes.oneOfType([PropTypes.object]),
};

Panel.defaultProps = {
    state: {},
};

export default Panel;
