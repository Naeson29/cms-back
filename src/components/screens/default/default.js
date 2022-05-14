import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// features
import {
    HeaderScreen, List, Panel, Modal, Loading, Show, Edit,
} from '../../features';

class Default extends Component {
    constructor(props) {
        super(props);

        const { match, screen } = props;

        if (screen === 'index') {
            props.getList();
        }

        if (screen === 'show' || screen === 'update') {
            props.getDetail(match.params.id);
        }
    }

    screen(props) {
        const { state, card, detail, form, create, update, screen } = props;
        const { loadings = {}, list = false } = state;

        switch (screen) {
        case 'index': {
            return list && (
                <div>
                    <List
                        {...props}
                        type={card.type}
                        content={card.render}
                        loading={<Loading className="loading-list" />}
                    />
                    {
                        loadings.list && <Loading />
                    }
                </div>
            );
        }
        case 'show': {
            return loadings.detail ? <Loading /> : (
                <Show
                    state={state}
                    detail={detail.render}
                />
            );
        }
        case 'create': {
            return (
                <Edit
                    action={screen}
                    state={state}
                    form={form}
                    create={create}
                />
            );
        }
        case 'update': {
            return loadings.detail ? <Loading /> : (
                <Edit
                    action={screen}
                    state={state}
                    form={form}
                    update={update}
                />
            );
        }

        default:
            return null;
        }
    }

    render() {
        const { props } = this;
        const { t, state, modals, screen } = props;
        const { model = 'default' } = state;

        return (
            <div className={`fragment ${model}`}>
                <HeaderScreen
                    {...props}
                    title={t(`${model}:title:${screen}`)}
                />
                {
                    this.screen(props)
                }
                <Panel
                    state={state}
                    content={<div />}
                />
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
    screen: PropTypes.string,
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
    screen: '',
};

export default withTranslation('default')(Default);
