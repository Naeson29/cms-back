import React from 'react';
import PropTypes from 'prop-types';
import { panelContainer } from '../../utils/Panel';
import HeaderScreen from '../../containers/Features/HeaderScreen';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Panel = (props) => {
    const { state, loadingComponent } = props;
    const { panel, loadingDetail, detail } = state;

    return (
        <div>
            {
                !!panel.model
                && (
                    <div className="panel-container right">
                        <div className="panel">
                            <HeaderScreen
                                type="panel"
                            />
                            <div className="content-panel">
                                { loadingDetail ? loadingComponent : panelContainer(panel, detail) }
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
    loadingComponent: PropTypes.element,
};

Panel.defaultProps = {
    state: {},
    loadingComponent: (<div />),
};

export default Panel;
