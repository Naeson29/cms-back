import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TransitionGroup, CSSTransition,
} from 'react-transition-group';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';
import Action from '../../utils/Action';

// Panels
import PanelEvent from '../../containers/Screens/Dashboard/Panel';
import PanelUser from '../../containers/Screens/Users/Panel';
import Functions from '../../containers/Features/PanelFunction';


class Panel extends Component {
    constructor(props) {
        super(props);
        this.renderPanel = this.renderPanel.bind(this);
    }

    renderPanel(panel) {
        const { close } = this.props;

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
                <div className="action">
                    <div className="vertical-center">
                        <ReactSVG
                            src="./img/left.svg"
                            onClick={() => close()}
                            className="close-panel"
                        />
                    </div>
                    <div className="vertical-center">
                        <button
                            className="btn"
                            type="button"
                        >
                            Ajouter
                        </button>
                        {/* {
                        !create &&
                        <span className={'btn delete'} onClick={this._deleteEvent}>{'Supprimer'}</span>
                    } */}
                    </div>
                </div>
                {component}
            </div>
        );
    }


    render() {
        const { panel } = this.props;

        return (
            <TransitionGroup>
                {
                    !!panel.label
                    && (
                        <CSSTransition
                            key={`trans_right_${panel.label}`}
                            classNames="panel"
                            timeout={{
                                enter: 0, exit: 0,
                            }}
                        >
                            <div className="panel-container right">
                                {this.renderPanel(panel)}
                            </div>
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        );
    }
}

Panel.propTypes = {
    panel: PropTypes.oneOfType([PropTypes.object]),
    close: PropTypes.func,
};

Panel.defaultProps = {
    panel: {},
    close: () => {},
};

export default connect(() => ({}), Functions)(Panel);
