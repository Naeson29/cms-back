import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Features/Loading';

class Index extends Component {
    constructor(props) {
        super(props);
        props.load();
    }

    render() {
        const { loading } = this.props;

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
                            </div>
                        )
                }
            </div>
        );
    }
}


Index.propTypes = {
    load: PropTypes.func,
    loading: PropTypes.bool,
};

Index.defaultProps = {
    load: () => {},
    loading: false,
};

export default Index;
