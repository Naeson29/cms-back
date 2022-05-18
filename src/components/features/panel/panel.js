import React from 'react';
import { HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { Button } from '..';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Panel = (props) => {
    const { state, closePanel } = props;
    const { panel = {} } = state;

    return (
        <div>
            {
                panel.open
                && (
                    <div className="panel-container right">
                        <div className="panel">
                            <div className="content-panel">
                                <div className="close">
                                    <Button
                                        action={() => closePanel()}
                                        icon={HiX}
                                        className="button"
                                    />
                                </div>
                                { panel.content }
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
    closePanel: PropTypes.func,
};

Panel.defaultProps = {
    state: {},
    closePanel: () => {},
};

export default Panel;
