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
        const { t, state, panels, modals, card, form } = props;
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
    panels: false,
    modals: false,
    card: false,
    form: false,
};

export default withTranslation('default')(Default);
