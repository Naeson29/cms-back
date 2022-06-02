import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { permissionUtility } from '../../utilities';
import {
    HeaderScreen, List, Panel, Modal, Loading, Show, Edit, Unauthorized,
} from '../../features';

const { getPermissionScreen } = permissionUtility;

class Default extends Component {
    constructor(props) {
        super(props);
        const { match, actions, screen, current, state } = props;
        const { params = {} } = match;
        const { model } = state;
        this.permission = getPermissionScreen(current, model, screen, params);

        if (this.permission) {
            if (actions.list) {
                props.getList();
            }
            if (actions.detail) {
                props.getDetail(params.id);
            }
        }
    }

    screen(props) {
        const { state, current, card, detail, form, create, update, screen } = props;
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
                <div className="screen-content">
                    <Edit
                        state={state}
                        form={form.default}
                        create={create}
                    />
                    {
                        loadings.edit && <Loading className="edit" />
                    }
                </div>
            );
        }
        case 'update': {
            return loadings.detail ? <Loading /> : (
                <div className="screen-content">
                    <Edit
                        current={current}
                        state={state}
                        form={form.default}
                        data={state.detail}
                        update={update}
                        id={state.detail.id}
                    />
                    {
                        loadings.edit && <Loading className="edit" />
                    }
                </div>
            );
        }

        case 'password': {
            return (
                <div className="screen-content">
                    <Edit
                        state={state}
                        update={update}
                        form={form.password}
                        id={current.id}
                    />
                    {
                        loadings.edit && <Loading className="edit" />
                    }
                </div>
            );
        }

        default:
            return <div />;
        }
    }

    renderScreen(props) {
        const { state, modals } = props;
        const { model = 'default' } = state;

        return (
            <div className={`fragment ${model}`}>
                <HeaderScreen {...props} />
                {
                    this.screen(props)
                }
                <Panel {...props} />
                {
                    modals && (
                        <Modal {...props} />
                    )
                }
            </div>
        );
    }

    render() {
        return this.permission ? this.renderScreen(this.props) : <Unauthorized />;
    }
}

Default.propTypes = {
    t: PropTypes.func,
    getList: PropTypes.func,
    getDetail: PropTypes.func,
    current: PropTypes.oneOfType([PropTypes.object]),
    actions: PropTypes.oneOfType([PropTypes.object]),
    match: PropTypes.oneOfType([PropTypes.object]),
    state: PropTypes.oneOfType([PropTypes.object]),
    panels: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    modals: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    card: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    form: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    screen: PropTypes.string,
};

Default.defaultProps = {
    t: () => {},
    getList: () => {},
    getDetail: () => {},
    current: {},
    actions: {},
    match: {},
    state: {},
    panels: false,
    modals: false,
    card: false,
    form: false,
    screen: '',
};

export default Default;
