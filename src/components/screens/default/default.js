import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// features
import {
    HeaderScreen, List, Panel, Modal, Loading, Show,
} from '../../features';

class Default extends Component {
    constructor(props) {
        super(props);

        const { state, match } = props;
        const { action } = state;

        if (action === 'index') {
            props.getList();
        }

        if (action === 'show') {
            props.getDetail(match.params.id);
        }
    }

    screen(props) {
        const { state, modals, card, detail } = props;
        const { action, loadings = {}, list = false } = state;

        switch (action) {
        case 'index': {
            return loadings.list ? <Loading /> : list && (
                <List
                    {...props}
                    type={card.type}
                    content={card.component}
                    modals={modals}
                    loading={<Loading className="loading-list" />}
                />
            );
        }
        case 'show': {
            return loadings.detail ? <Loading /> : (
                <Show
                    state={state}
                    detail={detail.component}
                />
            );
        }
        case 'create': {
            return loadings.detail ? <Loading /> : (
                <Show
                    state={state}
                    detail={detail.component}
                />
            );
        }

        default:
            return null;
        }
    }

    render() {
        const { props } = this;
        const { t, state, panels, modals, form } = props;
        const { model = 'default', panel = {} } = state;

        return (
            <div className={`fragment ${model}`}>
                <HeaderScreen
                    {...props}
                    title={t(`${model}:title:${!panel.open ? 'default' : panel.action}`)}
                />
                { this.screen(props) }
                {
                    panels && (
                        <Panel
                            {...props}
                            panels={panels}
                            form={form}
                            loading={<Loading />}
                        />
                    )
                }
                {
                    modals && (
                        <Modal {...props} />
                    )
                }
            </div>
        );
    }
}

Default.propTypes = {
    t: PropTypes.func,
    getList: PropTypes.func,
    getDetail: PropTypes.func,
    match: PropTypes.oneOfType([PropTypes.object]),
    state: PropTypes.oneOfType([PropTypes.object]),
    panels: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    modals: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    card: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    form: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

Default.defaultProps = {
    t: () => {},
    getList: () => {},
    getDetail: () => {},
    match: {},
    state: {},
    panels: false,
    modals: false,
    card: false,
    form: false,
};

export default withTranslation('default')(Default);
