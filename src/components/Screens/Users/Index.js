// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    HiPencil, HiTrash, HiPlusCircle,
} from 'react-icons/hi';
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
                                next={() => {
                                    if (pagination.current_page < pagination.last_page) more(pagination.current_page + 1);
                                }}
                                hasMore={pagination.current_page < pagination.last_page}
                                loader={null}
                                refreshFunction={() => {}}
                                pullDownToRefreshThreshold={50}
                            >
                                {
                                    users.map((key) => {
                                        const { edit, trash } = AllowUser({
                                            ...getRoles(current),
                                            isMe: current.id === key.id,
                                        });

                                        return (
                                            <div
                                                className="card-container"
                                                key={key.id}
                                            >
                                                <div className="card">
                                                    <p className="name">{`${key.first_name} ${key.last_name}`}</p>
                                                    <p className="email">{key.email}</p>
                                                    <div className="action">
                                                        <button
                                                            onClick={() => edit && {}}
                                                            className={`button edit ${!edit && 'disabled'}`}
                                                            type="button"
                                                        >
                                                            <HiPencil className="icon" />
                                                        </button>
                                                        <button
                                                            onClick={() => trash && deleteModal(deleteUser(key))}
                                                            className={`button trash ${!trash && 'disabled'}`}
                                                            type="button"
                                                        >
                                                            <HiTrash className="icon" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                                <button
                                    onClick={() => open(Action.PANEL_USER)}
                                    className="add"
                                    type="button"
                                >
                                    <HiPlusCircle className="icon" />
                                </button>
                            </InfiniteScroll>
                        )
                }
            </div>
        );
    }
}

Index.propTypes = {
    load: PropTypes.func,
    open: PropTypes.func,
    more: PropTypes.func,
    deleteModal: PropTypes.func,
    users: PropTypes.oneOfType([PropTypes.array]),
    loading: PropTypes.bool,
    current: PropTypes.oneOfType([PropTypes.object]),
    pagination: PropTypes.oneOfType([PropTypes.object]),
};

Index.defaultProps = {
    load: () => {},
    open: () => {},
    more: () => {},
    deleteModal: () => {},
    users: [],
    loading: false,
    current: {},
    pagination: {},
};

export default connect(() => ({}), Functions)(Index);
