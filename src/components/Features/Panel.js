import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TransitionGroup, CSSTransition,
} from 'react-transition-group';
import {
    HiOutlineChevronLeft, HiPlusCircle,
} from 'react-icons/hi';
import Action from '../../utils/Action';

// Panels
import PanelEvent from '../../containers/Screens/Dashboard/Panel';
import PanelUser from '../../containers/Screens/Users/Panel';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.renderPanel = this.renderPanel.bind(this);
    }

    renderPanel(panel) {
        const { closeModal } = this.props;

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
                    <button
                        className="add"
                        type="button"
                    >
                        <HiPlusCircle className="icon" />
                    </button>
                    <button
                        onClick={() => closeModal()}
                        className="close-panel"
                        type="button"
                    >
                        <HiOutlineChevronLeft className="icon" />
                    </button>
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
    closeModal: PropTypes.func,
};

Panel.defaultProps = {
    panel: {},
    closeModal: () => {},
};

export default Panel;
