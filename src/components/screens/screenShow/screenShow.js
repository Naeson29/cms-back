import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// features
import {
    HeaderScreen, List, Panel, Modal, Loading,
} from '../../features';

class ScreenShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { props } = this;
        const { t, state, panels, modals, card, form } = props;
        const { model = 'default', loadings = {}, panel = {}, list = false, cardType = 'small' } = state;
        return (
            <div className={`test`}>
                
            </div>
        );
    }
}

ScreenShow.propTypes = {
    t: PropTypes.func,
    state: PropTypes.oneOfType([PropTypes.object]),
    panels: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    modals: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    card: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    form: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

ScreenShow.defaultProps = {
    t: () => {},
    state: {},
    panels: false,
    modals: false,
    card: false,
    form: false,
};

export default withTranslation('default')(ScreenShow);
