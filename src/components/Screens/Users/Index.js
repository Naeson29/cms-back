// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../../../containers/Features/List';
import {
    Actions, Type,
} from '../../../utils/Panel';
import { deleteUser } from '../../../utils/Modal';
import { AllowUser } from '../../../utils/Allow';
import { getImage } from '../../../utils/Functions';

import HeaderScreen from '../../../containers/Features/HeaderScreen';
import Panel from '../../../containers/Features/Panel';
import Modal from '../../../containers/Features/Modal';
import Loading from '../../Features/Loading';

// Components

class Index extends Component {
    constructor(props) {
        super(props);

        props.load();
    }

    render() {
        const { users, loading, pagination, more, detail } = this.props;
        const panel = {
            label: Type.USER,
            actions: Actions,
        };

        const { label, actions } = panel;

        return (
            <div className="fragment users">
                <HeaderScreen
                    type="list"
                    panel={{
                        label,
                        action: actions.CREATE,
                    }}
                    title="Utilisateurs"
                />
                {
                    loading ? <Loading />

                        : (
                            <List
                                type="small"
                                data={users}
                                pagination={pagination}
                                more={more}
                                panel={panel}
                                allow={AllowUser}
                                deleteAction={deleteUser}
                                content={key => (
                                    <div className="card-user">
                                        <div
                                            style={{
                                                backgroundImage: `url(${key.image ? getImage(key.image, 'thumb') : './img/avatar.png'})`,
                                            }}
                                            className="image"
                                        />
                                        <p className="name">{`${key.first_name} ${key.last_name}`}</p>
                                    </div>
                                )}
                                loading={Loading({ contextClass: 'loading-list' })}
                            />
                        )
                }
                <Panel
                    loading={loading}
                    loadingComponent={<Loading />}
                    detail={detail}
                />
                <Modal />
            </div>
        );
    }
}

Index.propTypes = {
    load: PropTypes.func,
    more: PropTypes.func,
    users: PropTypes.oneOfType([PropTypes.array]),
    detail: PropTypes.oneOfType([PropTypes.object]),
    loading: PropTypes.bool,
    pagination: PropTypes.oneOfType([PropTypes.object]),
};

Index.defaultProps = {
    load: () => {},
    more: () => {},
    users: [],
    detail: {},
    loading: false,
    pagination: {},
};

export default Index;
