// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../../../containers/Features/List';
import Action from '../../../utils/Action';
import Loader from '../../Features/Loading';
import { deleteUser } from '../../../utils/Modal';
import { AllowUser } from '../../../utils/Allow';

// Components

class Index extends Component {
    constructor(props) {
        super(props);

        props.load();
    }

    render() {
        const { users, loading, pagination, more } = this.props;

        return (
            <div className="fragment users">
                <h1>
                    <span>Utilisateurs</span>
                </h1>
                {
                    loading ? <Loader />

                        : (
                            <List
                                data={users}
                                pagination={pagination}
                                more={more}
                                panel={Action.PANEL_USER}
                                allow={AllowUser}
                                deleteAction={deleteUser}
                                content={key => (
                                    <div>
                                        <p className="name">{`${key.first_name} ${key.last_name}`}</p>
                                        <p className="email">{key.email}</p>
                                    </div>
                                )}
                            />
                        )
                }
            </div>
        );
    }
}

Index.propTypes = {
    load: PropTypes.func,
    more: PropTypes.func,
    users: PropTypes.oneOfType([PropTypes.array]),
    loading: PropTypes.bool,
    pagination: PropTypes.oneOfType([PropTypes.object]),
};

Index.defaultProps = {
    load: () => {},
    more: () => {},
    users: [],
    loading: false,
    pagination: {},
};

export default Index;
