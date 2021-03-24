// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import List from '../../Features/List';

// Components
import HeaderScreen from '../../Features/HeaderScreen';
import Panel from '../../Features/Panel';
import Modal from '../../Features/Modal';
import Loading from '../../Features/Loading';

// Models
import getModel from '../../Models';

class Index extends Component {
    constructor(props) {
        super(props);
        props.load();
    }

    render() {
        const { props } = this;
        const { t, state } = props;
        const { model, loadings, panel } = state;
        const { panels, modals, card } = getModel(model);

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
                    state={state}
                    panels={panels}
                    loading={<Loading />}
                />
                <Modal {...props} />
            </div>
        );
    }
}

Index.propTypes = {
    t: PropTypes.func,
    load: PropTypes.func,
    state: PropTypes.oneOfType([PropTypes.object]),
};

Index.defaultProps = {
    t: () => {},
    load: () => {},
    state: {},
};

export default withTranslation('Default')(Index);
