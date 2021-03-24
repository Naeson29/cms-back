import React from 'react';
import PropTypes from 'prop-types';

// Utils
import {
    isOpen, getContent,
} from '../Utilities/Panel';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Panel = (props) => {
    const { state, panels, loading } = props;
    const { panel, loadings, detail } = state;
    const Content = getContent(panel, panels);

    return (
        <div>
            {
                isOpen(panel)
                && (
                    <div className="panel-container right">
                        <div className="panel">
                            <div className="content-panel">
                                { loadings.detail ? loading : <Content detail={detail} /> }
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
