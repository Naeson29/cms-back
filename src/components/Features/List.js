import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    HiPencil, HiPlusCircle, HiTrash,
} from 'react-icons/hi';
import Functions from '../../containers/Features/PanelFunction';
import { getRoles } from '../../utils/Role';

// eslint-disable-next-line react/prefer-stateless-function
class List extends Component {
    render() {
        const { current, data, pagination, more, open, panel, allow, deleteModal, deleteAction, content } = this.props;

        return (
            <InfiniteScroll
                dataLength={data.length}
                next={() => {
                    if (pagination.current_page < pagination.last_page) more(pagination.current_page + 1);
                }}
                hasMore={pagination.current_page < pagination.last_page}
                loader={null}
                refreshFunction={() => {}}
                pullDownToRefreshThreshold={50}
                className="list-card"
            >
                {
                    data.map((key) => {
                        const { edit, trash } = allow({
                            ...getRoles(current),
                            isMe: current.id === key.id,
                        });

                        return (
                            <div
                                className="card-container"
                                key={key.id}
                            >
                                <div className="card">
                                    {content(key)}
                                    <div className="action">
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
                                </div>
                            </div>
                        );
                    })
                }
                <button
                    onClick={() => open(panel)}
                    className="add"
                    type="button"
                >
                    <HiPlusCircle className="icon" />
                </button>
            </InfiniteScroll>
        );
    }
}

List.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array]),
    pagination: PropTypes.oneOfType([PropTypes.object]),
    current: PropTypes.oneOfType([PropTypes.object]),
    open: PropTypes.func,
    more: PropTypes.func,
    allow: PropTypes.func,
    deleteModal: PropTypes.func,
    deleteAction: PropTypes.func,
    content: PropTypes.func,
    panel: PropTypes.string,
};

List.defaultProps = {
    data: [],
    pagination: {},
    current: {},
    open: () => {},
    more: () => {},
    allow: () => {},
    deleteModal: () => {},
    deleteAction: () => {},
    content: () => {},
    panel: '',
};


export default connect(() => ({}), Functions)(List);
