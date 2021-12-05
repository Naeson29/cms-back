import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// features
import {
    HeaderScreen, List, Panel, Modal, Loading,
} from '../../features';

class Default extends Component {
    constructor(props) {
        super(props);
        props.getList();
    }

    render() {
        const { props } = this;
        const { t, state, panels = null, modals = false, card = null, form = null } = props;
        const { model = 'default', loadings = {}, panel = {}, list = false } = state;
        return (
            <div className={`fragment ${model}`}>
                <HeaderScreen
                    {...props}
                    title={t(`${model}:title:${!panel.open ? 'default' : panel.action}`)}
                />
                {
                    loadings.list ? <Loading /> : list && (
                        <List
                            {...props}
                            type="small"
                            content={card}
                            modals={modals}
                            loading={<Loading className="loading-list" />}
                        />
                    )
                }
                <Panel
                    {...props}
                    panels={panels}
                    form={form}
                    loading={<Loading />}
                />
                <Modal {...props} />
            </div>
        );
    }
}

Default.propTypes = {
    t: PropTypes.func,
    getList: PropTypes.func,
    state: PropTypes.oneOfType([PropTypes.object]),
    panels: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    modals: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    card: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    form: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Default.defaultProps = {
    t: () => {},
    getList: () => {},
    state: {},
    panels: null,
    modals: null,
    card: null,
    form: null,
};

export default withTranslation('default')(Default);
