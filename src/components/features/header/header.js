import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    HiLogout,
} from 'react-icons/hi';
import {
    AiOutlineMenuUnfold, AiOutlineMenuFold, AiFillSetting,
} from 'react-icons/ai';

import { Button } from '..';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (props) => {
    const { logout, propsMenu } = props;
    const { toggle, menu } = propsMenu;

    return (
        <div className="header-app">
            <nav className="navbar">
                <div className="navbar-nav-left">
                    <div
                        onClick={() => toggle(false)}
                        role="presentation"
                    >
                        <NavLink to="/" className="navbar-brand" replace>
                            <img src="./img/logo.png" alt="Logo" />
                            <div>
                                <span>B.O</span>
                                <span>v1</span>
                            </div>
                        </NavLink>
                    </div>
                    <Button
                        action={() => toggle(!menu)}
                        className="menu-burger"
                        icon={!menu ? AiOutlineMenuUnfold : AiOutlineMenuFold}
                    />
                </div>

                <div className="navbar-nav-right">
                    <NavLink to="/parameters" replace>
                        <AiFillSetting className="icon" />
                    </NavLink>
                    <Button
                        action={() => logout()}
                        className="button"
                        icon={HiLogout}
                    />
                </div>
            </nav>
        </div>
    );
};

Header.propTypes = {
    logout: PropTypes.func,
    propsMenu: PropTypes.oneOfType([PropTypes.object]),
};

Header.defaultProps = {
    logout: () => {},
    propsMenu: {},
};

export default Header;
