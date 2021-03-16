// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../../../containers/Features/List';
import {
    Actions, Type,
} from '../../../utils/Panel';

// Utils
import { deleteUser } from '../../../utils/Modal';
import { AllowUserButton } from '../../../utils/Allow';
import { getImage } from '../../../utils/Functions';

// Components
import HeaderScreen from '../../../containers/Features/HeaderScreen';
import Panel from '../../../containers/Features/Panel';
import Modal from '../../../containers/Features/Modal';
import Loading from '../../Features/Loading';

class Index extends Component {
    constructor(props) {
        super(props);
        props.load();
    }

    render() {
        const { list, loadingList, loadingDetail, pagination, more, detail } = this.props;
        const panel = {
            type: Type.USER,
            actions: Actions,
        };

        const { type, actions } = panel;

        return (
            <div className="fragment users">
                <HeaderScreen
                    type="list"
                    panel={{
                        type,
                        action: actions.CREATE,
                    }}
                    title="Utilisateurs"
                />
                {
                    loadingList ? <Loading />

                        : (
                            <List
                                type="small"
                                data={list}
                                pagination={pagination}
                                more={more}
                                panel={panel}
                                allow={AllowUserButton}
                                deleteAction={deleteUser}
                                content={(key) => {
                                    const { firstName, lastName, image } = key;
                                    return (
                                        <div className="card-user">
                                            <div
                                                style={{
                                                    backgroundImage: `url(${image ? getImage(image, 'thumb') : './img/avatar.png'})`,
                                                }}
                                                className="image"
                                            />
                                            <p className="name">{`${firstName} ${lastName}`}</p>
                                        </div>
                                    );
                                }}
                                loading={Loading({ contextClass: 'loading-list' })}
                            />
                        )
                }
                <Panel
                    loading={loadingDetail}
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
    list: PropTypes.oneOfType([PropTypes.array]),
    detail: PropTypes.oneOfType([PropTypes.object]),
    loadingList: PropTypes.bool,
    loadingDetail: PropTypes.bool,
    loadingDestroy: PropTypes.bool,
    pagination: PropTypes.oneOfType([PropTypes.object]),
};

Index.defaultProps = {
    load: () => {},
    more: () => {},
    list: [],
    detail: {},
    loadingList: false,
    loadingDetail: false,
    loadingDestroy: false,
    pagination: {},
};

export default Index;
