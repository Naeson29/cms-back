import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    HiLogout, HiCog, HiMenu,
} from 'react-icons/hi';

import Button from "./Button";

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (props) => {
    const { logout, toggleMenu } = props;

    return (
        <nav className="navbar">
            <div className="navbar-nav-left">
                <NavLink to="/" className="navbar-brand" replace>
                    <img src="./img/logo.png" alt="Logo" />
                    <span>Backoffice</span>
                </NavLink>
                <Button
                    action={() => toggleMenu()}
                    className="menu-burger"
                    icon={HiMenu}
                />
            </div>

            <div className="navbar-nav-right">
                <NavLink to="/parameters" replace>
                    <HiCog className="icon" />
                </NavLink>
                <Button
                    action={() => logout()}
                    className="button"
                    icon={HiLogout}
                />
            </div>
        </nav>
    );
};

Header.propTypes = {
    logout: PropTypes.func,
    toggleMenu: PropTypes.func,
};

Header.defaultProps = {
    logout: () => {},
    toggleMenu: () => {},
};

export default Header;
