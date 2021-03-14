import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
    Navs, isRoot, isRootPath,
} from '../../utils/Sidebar';

// eslint-disable-next-line react/prefer-stateless-function
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-nav">
                    <nav className="navbar">
                        <ul className="nav navbar-nav">
                            {
                                Navs.map((key) => {
                                    const isActive = () => isRootPath(this.props);
                                    const Icon = key.icon;

                                    return (
                                        <li className="nav-item" key={key.id}>
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
    }
}

export default Sidebar;
