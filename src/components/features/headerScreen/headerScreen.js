import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    HiPlusCircle, HiPencil, HiArrowCircleLeft,
} from 'react-icons/hi';

// Feature
import {
    Button,
    Filter,
    Pagination,
} from '..';

// Utils
import {
    permissionUtility,
} from '../../utilities';

const {
    getPermissionModel,
} = permissionUtility;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderScreen = (props) => {
    const { state, title, current, screen, route } = props;
    const { model, detail, list = [], screenList } = state;
    const { filter, pagination } = screenList;
    const { permissions } = current;
    const history = useHistory();
    const permission = getPermissionModel(permissions, model);

    const update = () => {
        history.push(`/${route}/edit/${detail.id}`);
    };

    const create = () => {
        history.push(`/${route}/create`);
    };

    const index = screen === 'index';
    const show = screen === 'show';

    const paginationButton = (index && list.length > 0 && pagination === 'button');
    const buttonEdit = show && permission.update;

    return (
        <div className="header-screen">
            <div className="content left">
                <Button
                    action={index ? create : () => history.goBack()}
                    icon={index ? HiPlusCircle : HiArrowCircleLeft}
                    className="button add"
                />
                <span>{title}</span>
                {
                    paginationButton && <Pagination {...props} />
                }
            </div>
            <div className="content right">
                {
                    (index && filter) && <Filter {...props} />
                }
                {
                    buttonEdit && (
                        <Button
                            action={update}
                            className="button button-edit"
                            icon={HiPencil}
                        />
                    )
                }
            </div>
        </div>
    );
};

HeaderScreen.propTypes = {
    title: PropTypes.string,
    screen: PropTypes.string,
    route: PropTypes.string,
    state: PropTypes.oneOfType([PropTypes.object]),
    current: PropTypes.oneOfType([PropTypes.object]),
};

HeaderScreen.defaultProps = {
    title: '',
    screen: '',
    route: '',
    state: {},
    current: {},
};

export default HeaderScreen;
