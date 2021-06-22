// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import List from '../../features/list';

// components
import HeaderScreen from '../../features/headerScreen';
import Panel from '../../features/panel';
import Modal from '../../features/modal';
import Loading from '../../features/loading';

// models
import getModel from '../../models';

class Index extends Component {
    constructor(props) {
        super(props);
        props.getList();
    }

    render() {
        const { props } = this;
        const { t, state } = props;
        const { model, loadings, panel } = state;
        const { panels, modals, card, form } = getModel(model);

        return (
            <div className={`fragment ${model}`}>
                <HeaderScreen
                    {...props}
                    title={t(`${model}:title:${!panel.open ? 'default' : panel.action}`)}
                />
                {
                    loadings.list ? <Loading /> : (
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

Index.propTypes = {
    t: PropTypes.func,
    getList: PropTypes.func,
    state: PropTypes.oneOfType([PropTypes.object]),
};

Index.defaultProps = {
    t: () => {},
    getList: () => {},
    state: {},
};

export default withTranslation('Default')(Index);
