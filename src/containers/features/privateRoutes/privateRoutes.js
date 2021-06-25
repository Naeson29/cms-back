import { getDefaultAuthenticationToken } from '../../../../react-core';

export default {
    mapState: state => ({
        token: getDefaultAuthenticationToken(state),
    }),
};
