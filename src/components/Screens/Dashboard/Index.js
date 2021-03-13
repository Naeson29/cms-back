import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    load: PropTypes.func,
    open: PropTypes.func,
    loading: PropTypes.bool,
};

Index.defaultProps = {
    load: () => {},
    open: () => {},
    loading: false,
};

export default connect(() => ({}), Functions)(Index);
