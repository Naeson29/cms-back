import React, { Component } from 'react';
import { NavLink }          from 'react-router-dom';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import {Navs} from "../../utils/Sidebar";

class Sidebar extends Component {
    render() {
        const { match, location } = this.props;
        const root = '/';

        const isRoot = () => {
            if(!location) return false;
            const {pathname} = location;
            return (pathname === root) && (location.pathname === match.url);
        }

        return (
            <div className={'sidebar'}>
                <div className={'sidebar-nav'}>
                    <nav className="navbar">
                        <ul className="nav navbar-nav">
                            {
                                Navs.map((key, index) => {
                                    return (
                                        <li className="nav-item" key={index}>
                                            <NavLink
                                                to={key.path}
                                                isActive={key.path === root ? isRoot : undefined}
                                                className="nav-link"
                                                activeClassName="active"
                                                replace
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