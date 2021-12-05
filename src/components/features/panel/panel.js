import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { panelUtility } from '../../utilities';

const {
    isOpen, getContent,
} = panelUtility;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Panel = (props) => {
    const { state, panels, loading } = props;
    const { panel = {}, loadings = {} } = state;
    const Content = getContent(panel, panels);
    const isLoading = (loadings.detail || loadings.edit);

    return (
        <div>
            {
                isOpen(panel)
                && (
                    <div className="panel-container right">
                        <div className="panel">
                            <div className="content-panel">
                                { isLoading ? loading : <Content {...props} action={panel.action} /> }
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
    panels: PropTypes.oneOfType([PropTypes.object]),
    loading: PropTypes.element,
};

Panel.defaultProps = {
    state: {},
    panels: {},
    loading: (<div />),
};

export default Panel;
