import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../Features/Loading';
import HeaderScreen from '../../Features/HeaderScreen';

class Index extends Component {
    constructor(props) {
        super(props);
        props.load();
    }

    render() {
        const { loading } = this.props;

        return (
            <div className="fragment dashboard">
                <HeaderScreen
                    type="list"
                    title="Tableau de bord"
                />
                {
                    loading ? <Loading />
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
