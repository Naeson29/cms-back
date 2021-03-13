import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as IconSolid from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        const { logout } = this.props;
        logout();
    }

    render() {
        return (
            <nav className="navbar">
                <NavLink to="/" className="navbar-brand" replace>
                    <img src="./img/logo.png" alt="Logo" />
                    <span>Backoffice</span>
                </NavLink>
                <div className="navbar-nav-right">
                    <NavLink to="/parameters" replace>
                        <FontAwesomeIcon icon={IconSolid.faCog} />
                    </NavLink>
                    <div
                        role="button"
                        onClick={this.logout}
                        onKeyDown={this.logout}
                        tabIndex={0}
                    >
                        <FontAwesomeIcon icon={IconSolid.faSignOutAlt} />
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    logout: PropTypes.func,
};

Header.defaultProps = {
    logout: () => {},
};


export default Header;
