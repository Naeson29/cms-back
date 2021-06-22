import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../features/loading';

class Index extends Component {
    constructor(props) {
        super(props);
        props.load();
    }

    render() {
        const { loading } = this.props;

        return (
            <div className="fragment dashboard">
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
