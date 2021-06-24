import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// model
import getModel from '../../../models';

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
        const { t, state } = props;
        const { model = 'default', loadings = {}, panel = {}, list = false } = state;
        const {
            panels = null,
            modals = false,
            card = null,
            form = null,
        } = getModel[model] || {};

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
                            modals={modals || {}}
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
};

Default.defaultProps = {
    t: () => {},
    getList: () => {},
    state: {},
};

export default withTranslation('default')(Default);
