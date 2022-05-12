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
    const { state, title } = props;
    const { path, action, current, model, detail, list = [] } = state;
    const { permissions } = current;
    const history = useHistory();
    const permission = getPermissionModel(permissions, model);

    const update = () => {
        history.push(`/${path}/edit/${detail.id}`);
    };

    const create = () => {
        history.push(`/${path}/create`);
    };

    const index = action === 'index';
    const show = action === 'show';

    const toolsList = index && list.length > 0;
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
                    toolsList && <Pagination {...props} />
                }
            </div>
            <div className="content right">
                {
                    toolsList && <Filter {...props} />
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
    state: PropTypes.oneOfType([PropTypes.object]),
};

HeaderScreen.defaultProps = {
    title: '',
    state: {},
};

export default HeaderScreen;
