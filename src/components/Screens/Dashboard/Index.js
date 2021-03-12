import React, {Component}  from 'react';
import {connect}           from 'react-redux';
import PropTypes           from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as IconSolid      from '@fortawesome/free-solid-svg-icons/index';
import {ACTIONS}           from '../../../utils/Actions';
import Functions from "../../../containers/Features/PanelFunction";
import { ReactSVG } from 'react-svg'
import Loader from "../../Features/Loading";

class Index extends Component {

    constructor(props){
        super(props);
        props.load();
    }

    render() {
        const {loading, open} = this.props;

        return (
            <div className={'fragment dashboard'}>
                <h1>
                    <span>{'Tableau de bord'}</span>
                </h1>
                {
                    loading ? <Loader /> :
                        <div>
                            <div>

                            </div>
                            <ReactSVG
                                src="./img/add.svg"
                                onClick={() => open(ACTIONS.PANEL_EVENT)}
                                className={'add'}
                            />
                        </div>
                }
            </div>
        );
    }
}


Index.propTypes = {
    open : PropTypes.func,
    loading : PropTypes.bool
};

export default connect(() => {return {}}, Functions)(Index);
