import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Navs, isRoot, isRootPath} from "../../utils/Sidebar";

class Sidebar extends Component {
    render() {

        return (
            <div className={'sidebar'}>
                <div className={'sidebar-nav'}>
                    <nav className="navbar">
                        <ul className="nav navbar-nav">
                            {
                                Navs.map((key, index) => {

                                    const isActive = () => isRootPath(this.props);

                                    return (
                                        <li className="nav-item" key={index}>
                                            <NavLink
                                                to={key.path}
                                                isActive={isRoot(key.path) ? isActive : undefined}
                                                className="nav-link"
                                                activeClassName="active"
                                            >
                                                <FontAwesomeIcon icon={key.icon} />
                                                <span>{key.label}</span>
                                            </NavLink>
                                        </li>
                                    )
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