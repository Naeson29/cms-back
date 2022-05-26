import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
    const { menuProps, models } = props;
    const { toggle, menu } = menuProps;
    const { t } = useTranslation('sidebar');

    return (
        <div className={`sidebar ${!menu ? 'isClose' : 'isOpen'}`}>
            <div className="sidebar-nav">
                <nav className="navbar">
                    <ul className="nav navbar-nav">
                        {
                            Navs(models, t).map((key) => {
                                const isActive = () => isRootPath(props);
                                const Icon = key.icon;
                                const slash = key.id !== 1 ? '/' : '';

                                return (
                                    <li
                                        className="nav-item"
                                        key={key.id}
                                        onClick={() => toggle(false)}
                                        role="presentation"
                                    >
                                        <NavLink
                                            to={slash + key.path}
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
    models: PropTypes.oneOfType([PropTypes.object]),
    menuProps: PropTypes.oneOfType([PropTypes.object]),
};

Sidebar.defaultProps = {
    models: {},
    menuProps: {},
};


export default Sidebar;
