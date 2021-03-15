// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HiPlusCircle } from 'react-icons/hi';
import List from '../../../containers/Features/List';
import Action from '../../../utils/Action';
import Loading from '../../Features/Loading';
import { deleteUser } from '../../../utils/Modal';
import { AllowUser } from '../../../utils/Allow';
import { getImage } from '../../../utils/Functions';

// Components

class Index extends Component {
    constructor(props) {
        super(props);

        props.load();
    }

    render() {
        const { users, loading, pagination, more, openModal } = this.props;

        return (
            <div className="fragment users">
                <div className="header.list">
                    <p>Utilisateurs</p>
                    <button
                        onClick={() => openModal(Action.PANEL_USER)}
                        className="add"
                        type="button"
                    >
                        <HiPlusCircle className="icon" />
                    </button>
                    <div />
                </div>
                {
                    loading ? <Loading />

                        : (
                            <List
                                type="small"
                                data={users}
                                pagination={pagination}
                                more={more}
                                panel={Action.PANEL_USER}
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
                                loading={() => <Loading contextClass="loading-list" />}
                            />
                        )
                }
            </div>
        );
    }
}

Index.propTypes = {
    load: PropTypes.func,
    openModal: PropTypes.func,
    more: PropTypes.func,
    users: PropTypes.oneOfType([PropTypes.array]),
    loading: PropTypes.bool,
    pagination: PropTypes.oneOfType([PropTypes.object]),
};

Index.defaultProps = {
    load: () => {},
    openModal: () => {},
    more: () => {},
    users: [],
    loading: false,
    pagination: {},
};

export default Index;
