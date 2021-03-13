// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Action from '../../../utils/Action';
import Functions from '../../../containers/Features/PanelFunction';
import Loader from '../../Features/Loading';
import { deleteUser } from '../../../utils/Modal';
import { getRoles } from '../../../utils/Role';
import { AllowUser } from '../../../utils/Allow';

// Components

class Index extends Component {
    constructor(props) {
        super(props);

        props.load();
    }

    render() {
    	const { open, users, loading, deleteModal, current, pagination, more } = this.props;

        return (
            <div className="fragment users">
                <h1>
                    <span>Utilisateurs</span>
                </h1>
                {
                    loading ? <Loader />

                        : (
                            <InfiniteScroll
                                dataLength={users.length} // This is important field to render the next data
                                className="list-card"
                                next={() => { pagination.current_page < pagination.last_page && more(pagination.current_page + 1); }}
                                hasMore={pagination.current_page < pagination.last_page}
                                loader={null}
                                refreshFunction={() => {}}
                                pullDownToRefresh
                                pullDownToRefreshThreshold={50}
                            >
                                {
                                    users.map((key, index) => {
                                        const { edit, trash } = AllowUser({
                                            ...getRoles(current),
                                            isMe: current.id === key.id,
                                        });

                                        return (
                                            <div
                                                className="card-container"
                                                key={index}
                                            >
                                                <div className="card">
                                                    <p className="name">{`${key.first_name} ${key.last_name}`}</p>
                                                    <p className="email">{key.email}</p>
                                                    <div className="action">
                                                        <ReactSVG
                                                            src="./img/pencil.svg"
                                                            onClick={() => edit && {}}
                                                            className={`button edit ${!edit && 'disabled'}`}
                                                        />
                                                        <ReactSVG
                                                            src="./img/trash.svg"
                                                            onClick={() => trash && deleteModal(deleteUser(key))}
                                                            className={`button trash ${!trash && 'disabled'}`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                                <ReactSVG
                                    src="./img/add.svg"
                                    onClick={() => open(Action.PANEL_USER)}
                                    className="add"
                                />
                            </InfiniteScroll>
                        )
                }
            </div>
        );
    }
}

Index.propTypes = {
    open: PropTypes.func,
    more: PropTypes.func,
    deleteModal: PropTypes.func,
    users: PropTypes.array,
    loading: PropTypes.bool,
    current: PropTypes.object,
    pagination: PropTypes.object,
};

Index.defaultProps = {
    open: () => {},
    more: () => {},
    deleteModal: () => {},
    users: [],
    loading: false,
    current: {},
    pagination: {},
};

export default connect(() => ({}), Functions)(Index);
