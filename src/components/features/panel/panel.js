import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Panel = (props) => {
    const { state, content } = props;
    const { panel = {} } = state;

    return (
        <div>
            {
                panel.open
                && (
                    <div className="panel-container right">
                        <div className="panel">
                            <div className="content-panel">
                                { content }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

Panel.propTypes = {
    state: PropTypes.oneOfType([PropTypes.object]),
    content: PropTypes.element,
};

Panel.defaultProps = {
    state: {},
    content: (<div />),
};

export default Panel;
