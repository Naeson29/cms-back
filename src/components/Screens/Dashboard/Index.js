import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as IconSolid from '@fortawesome/free-solid-svg-icons/index';
import { ReactSVG } from 'react-svg';
import Action from '../../../utils/Action';
import Functions from '../../../containers/Features/PanelFunction';
import Loader from '../../Features/Loading';

class Index extends Component {
    constructor(props) {
        super(props);
        props.load();
    }

    render() {
        const { loading, open } = this.props;

        return (
            <div className="fragment dashboard">
                <h1>
                    <span>Tableau de bord</span>
                </h1>
                {
                    loading ? <Loader />
                        : (
                            <div>
                                <div />
                                <ReactSVG
                                    src="./img/add.svg"
                                    onClick={() => open(Action.PANEL_EVENT)}
                                    className="add"
                                />
                            </div>
                        )
                }
            </div>
        );
    }
}


Index.propTypes = {
    open: PropTypes.func,
    loading: PropTypes.bool,
};

export default connect(() => ({}), Functions)(Index);
