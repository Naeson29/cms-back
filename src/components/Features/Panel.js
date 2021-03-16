import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Action from '../../utils/Action';
import HeaderScreen from '../../containers/Features/HeaderScreen';

// Panels
import PanelEvent from '../../containers/Screens/Dashboard/Panel';
import PanelUser from '../../containers/Screens/Users/Panel';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.renderPanel = this.renderPanel.bind(this);
    }

    renderPanel(panel) {
        let component;

        switch (panel.label) {
        case Action.PANEL_EVENT:
            component = (<PanelEvent {...panel.parameters} />);
            break;

        case Action.PANEL_USER:
            component = (<PanelUser {...panel.parameters} />);
            break;

        default:
            component = (<div />);
            break;
        }

        return (
            <div className="panel">
                <HeaderScreen
                    type="panel"
                />
                {component}
            </div>
        );
    }


    render() {
        const { panel } = this.props;

        return (
            <div>
                {
                    !!panel.label
                    && (
                        <div className="panel-container right">
                            {this.renderPanel(panel)}
                        </div>
                    )
                }
            </div>
        );
    }
}

Panel.propTypes = {
    panel: PropTypes.oneOfType([PropTypes.object]),
    closePanel: PropTypes.func,
};

Panel.defaultProps = {
    panel: {},
    closePanel: () => {},
};

export default Panel;
