import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { permissionUtility } from '../../utilities';

// features
import {
    HeaderScreen, List, Panel, Modal, Loading, Show, Edit,
} from '../../features';

const { getPermissionModel } = permissionUtility;

class Default extends Component {
    constructor(props) {
        super(props);
        const { match, screen, current, state } = props;
        const { model } = state;
        this.permission = getPermissionModel(current.permissions, model);

        if (this.permission[screen]) {
            switch (screen) {
            case 'index': {
                props.getList();
                break;
            }
            case 'show':
            case 'update': {
                props.getDetail(match.params.id);
                break;
            }
            default:
            }
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
                <div className="screen-content">
                    <Edit
                        state={state}
                        form={form}
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
                        state={state}
                        form={form}
                        update={update}
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

    render() {
        const { props } = this;
        const { t, state, modals, screen } = props;
        const { model } = state;

        if (!this.permission[screen]) {
            return <div />;
        }

        return (
            <div className={`fragment ${model}`}>
                <HeaderScreen
                    {...props}
                    title={t(`${model}:title:${screen}`)}
                />
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
}

Default.propTypes = {
    t: PropTypes.func,
    getList: PropTypes.func,
    getDetail: PropTypes.func,
    current: PropTypes.oneOfType([PropTypes.object]),
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
    current: {},
    match: {},
    state: {},
    panels: false,
    modals: false,
    card: false,
    form: false,
    screen: '',
};

export default withTranslation('default')(Default);
