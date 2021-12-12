import PropTypes from 'prop-types';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Show = (props) => {
    const { state, detail } = props;
    return detail ? detail(state.detail) : null;
};

Show.propTypes = {
    state: PropTypes.oneOfType([PropTypes.object]),
    detail: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

Show.defaultProps = {
    state: {},
    detail: false,
};

export default Show;
