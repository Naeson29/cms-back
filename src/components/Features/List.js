import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import {
    HiPencil, HiTrash, HiSearch,
} from 'react-icons/hi';
import { getRoles } from '../../utils/Role';

// eslint-disable-next-line react/prefer-stateless-function
class List extends Component {
    render() {
        const { type, current, data, pagination, more, allow, deleteModal, deleteAction, content, loading } = this.props;
        const Loading = loading;

        return (
            <InfiniteScroll
                dataLength={data.length}
                next={() => {
                    if (pagination.current_page < pagination.last_page) more(pagination.current_page + 1);
                }}
                hasMore={pagination.current_page < pagination.last_page}
                loader={<Loading />}
                refreshFunction={() => {}}
                pullDownToRefreshThreshold={50}
                className="list-card"
            >
                {
                    data.map((key, index) => {
                        const { edit, trash } = allow({
                            ...getRoles(current),
                            isMe: current.id === key.id,
                        });

                        return (
                            <div
                                className={`card-container ${type}`}
                                key={index.toString()}
                            >
                                <div className="card">
                                    {content(key)}
                                    <div className="action">
                                        <div className="button-container left">
                                            <button
                                                onClick={() => edit && {}}
                                                className={`button edit ${!edit && 'disabled'}`}
                                                type="button"
                                            >
                                                <HiPencil className="icon" />
                                            </button>
                                            <button
                                                onClick={() => trash && deleteModal(deleteAction(key))}
                                                className={`button trash ${!trash && 'disabled'}`}
                                                type="button"
                                            >
                                                <HiTrash className="icon" />
                                            </button>
                                        </div>
                                        <div className="button-container right">
                                            <button
                                                onClick={() => {}}
                                                className="button show"
                                                type="button"
                                            >
                                                <HiSearch className="icon" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </InfiniteScroll>
        );
    }
}

List.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array]),
    pagination: PropTypes.oneOfType([PropTypes.object]),
    current: PropTypes.oneOfType([PropTypes.object]),
    more: PropTypes.func,
    allow: PropTypes.func,
    loading: PropTypes.func,
    deleteModal: PropTypes.func,
    deleteAction: PropTypes.func,
    content: PropTypes.func,
    type: PropTypes.string,
};

List.defaultProps = {
    data: [],
    pagination: {},
    current: {},
    more: () => {},
    allow: () => {},
    loading: () => {},
    deleteModal: () => {},
    deleteAction: () => {},
    content: () => {},
    type: '',
};


export default List;
