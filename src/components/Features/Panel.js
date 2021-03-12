import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  TransitionGroup, CSSTransition } from 'react-transition-group';
import {ACTIONS} from '../../utils/Actions';

//Panels
import PanelEvent  from '../../containers/Screens/Dashboard/Panel';
import PanelUser  from '../../containers/Screens/Dashboard/Panel';
import {connect} from "react-redux";
import Functions from "../../containers/Features/PanelFunction";
import {ReactSVG} from "react-svg";


class Panel extends Component {
    constructor(props) {
        super(props);
        this._render = this._render.bind(this);
    }

    _render(panel) {
        let component = null;

        switch(panel.label) {
            case ACTIONS.PANEL_EVENT:
                component = (<PanelEvent {...panel.parameters} />);
                panel.title = panel.parameters ? 'Modification d\'un évènement' : 'Ajout d\'un évènement';
            break;

            case ACTIONS.PANEL_USER:
                component = (<PanelUser {...panel.parameters} />);
                panel.title = panel.parameters ? 'Modification d\'un utilisateur' : 'Ajout d\'un utilisateur';
                break;

            default:
                console.error('Invalid panel action', panel.label);
            break;
        }

        return (
            <div className={'panel'}>
                <div className={'action'}>
                    <div className={'vertical-center'}>
                        <ReactSVG
                            src="./img/left.svg"
                            onClick={() => this.props.close()}
                            className={'close-panel'}
                        />
                    </div>
                    <div className={'vertical-center'}>
                        <button className={'btn'}>{'Ajouter'}</button>
                        {/*{
                        !create &&
                        <span className={'btn delete'} onClick={this._deleteEvent}>{'Supprimer'}</span>
                    }*/}
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
                    !!panel.label &&
                    <CSSTransition
                        key={'trans_right_' + panel.label}
                        classNames={'panel'}
                        timeout={{enter: 0, exit: 0}}>
                        <div className={'panel-container right'}>
                            {this._render(panel)}
                        </div>
                    </CSSTransition>
                }
            </TransitionGroup>
        );
    }
}

Panel.propTypes = {
    panel: PropTypes.object,
};

export default connect(() => {return {}}, Functions)(Panel);
