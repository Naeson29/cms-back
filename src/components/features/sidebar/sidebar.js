import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sidebarUtility } from '../../utilities';

const {
    Navs, isRoot, isRootPath,
} = sidebarUtility;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Sidebar = (props) => {
    const { propsMenu } = props;
    const { toggle, menu, models = {} } = propsMenu;

    return (
        <div className={`sidebar ${!menu ? 'isClose' : 'isOpen'}`}>
            <div className="sidebar-nav">
                <nav className="navbar">
                    <ul className="nav navbar-nav">
                        {
                            Navs(models).map((key) => {
                                const isActive = () => isRootPath(props);
                                const Icon = key.icon;

                                return (
                                    <li
                                        className="nav-item"
                                        key={key.id}
                                        onClick={() => toggle(false)}
                                        role="presentation"
                                    >
                                        <NavLink
                                            to={key.path}
                                            isActive={isRoot(key.path) ? isActive : undefined}
                                            className="nav-link"
                                            activeClassName="active"
                                        >
                                            <Icon className="icon" />
                                            <span>{key.label}</span>
                                        </NavLink>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    propsMenu: PropTypes.oneOfType([PropTypes.object]),
};

Sidebar.defaultProps = {
    propsMenu: {},
};


export default Sidebar;
