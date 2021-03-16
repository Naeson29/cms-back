import React from 'react';
import PropTypes from 'prop-types';
import { PanelContainer } from '../../utils/Panel';
import HeaderScreen from '../../containers/Features/HeaderScreen';

const Panel = (props) => {
    const { panel } = props;

    return (
        <div>
            {
                !!panel.label
                && (
                    <div className="panel-container right">
                        <div className="panel">
                            <HeaderScreen
                                type="panel"
                            />
                            <div className="content-panel">
                                { PanelContainer(panel) }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

Panel.propTypes = {
    panel: PropTypes.oneOfType([PropTypes.object]),
};

Panel.defaultProps = {
    panel: {},
};

export default Panel;
