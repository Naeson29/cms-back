import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    HiLogout, HiCog,
} from 'react-icons/hi';

const Header = (props) => {
    const { logout } = props;

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand" replace>
                <img src="./img/logo.png" alt="Logo" />
                <span>Backoffice</span>
            </NavLink>
            <div className="navbar-nav-right">
                <NavLink to="/parameters" replace>
                    <HiCog className="icon" />
                </NavLink>
                <button
                    onClick={() => logout()}
                    className="button"
                    type="button"
                >
                    <HiLogout className="icon" />
                </button>
            </div>
        </nav>
    );
};

Header.propTypes = {
    logout: PropTypes.func,
};

Header.defaultProps = {
    logout: () => {},
};

export default Header;
