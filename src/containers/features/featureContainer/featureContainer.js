import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default ({
    component,
    mapDispatch,
    mapState,
} = {}) => {
    const mapStateToProps = state => ({
        ...mapState && mapState(state),
    });

    const mapDispatchToProps = dispatch => ({
        ...mapDispatch && mapDispatch(dispatch),
    });

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(component));
};
