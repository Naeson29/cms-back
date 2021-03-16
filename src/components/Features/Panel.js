import React from 'react';
import PropTypes from 'prop-types';
import { PanelContainer } from '../../utils/Panel';
import HeaderScreen from '../../containers/Features/HeaderScreen';

const Panel = (props) => {
    const { panel, loading, loadingComponent, detail } = props;

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
                                { loading ? loadingComponent : PanelContainer(panel, detail) }
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
    detail: PropTypes.oneOfType([PropTypes.object]),
    loading: PropTypes.bool,
    loadingComponent: PropTypes.element,
};

Panel.defaultProps = {
    panel: {},
    detail: {},
    loading: false,
    loadingComponent: (<div />),
};

export default Panel;
