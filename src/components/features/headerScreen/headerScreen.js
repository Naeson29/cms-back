import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
    HiPlusCircle, HiPencil, HiArrowCircleLeft,
} from 'react-icons/hi';
import { BsFilterSquareFill } from 'react-icons/bs';

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
    getPermissionButton,
} = permissionUtility;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderScreen = (props) => {
    const { state, match, current, screen, route, closePanel, openPanel } = props;
    const { params = {} } = match;
    const { model = 'default', detail, list = [], screenList, panel = {} } = state;
    const { t } = useTranslation(model);
    const { filter, pagination } = screenList(t);
    const history = useHistory();
    const permission = getPermissionButton(current, model);

    const update = () => {
        history.push(`/${route}/edit/${detail.id}`);
    };

    const create = () => {
        history.push(`/${route}/create`);
    };

    const userModel = (model === 'user');
    const index = screen === 'index';
    const show = screen === 'show';
    const paginationButton = (index && list.length > 0 && pagination === 'button');


    let buttonEdit;

    if (show && permission.update) {
        buttonEdit = !userModel || (userModel && (current.id === Number(params.id) || current.role === 1));
    }

    const filterOpen = panel.open && panel.filter;

    const toogleFilter = () => (filterOpen ? closePanel() : openPanel({
        open: true,
        content: <Filter {...props} />,
        filter: true,
    }));

    return (
        <div className="header-screen">
            <div className="content left">
                <Button
                    action={index ? create : () => history.goBack()}
                    icon={index ? HiPlusCircle : HiArrowCircleLeft}
                    className="button add"
                />
                <span>{t(`title.${screen}`)}</span>
                {
                    paginationButton && <Pagination {...props} />
                }
            </div>
            <div className="content right">
                {
                    (index && filter) && (
                        <Button
                            action={toogleFilter}
                            className="button button-filter"
                            icon={BsFilterSquareFill}
                        />
                    )
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
    screen: PropTypes.string,
    route: PropTypes.string,
    state: PropTypes.oneOfType([PropTypes.object]),
    match: PropTypes.oneOfType([PropTypes.object]),
    current: PropTypes.oneOfType([PropTypes.object]),
    openPanel: PropTypes.func,
    closePanel: PropTypes.func,
};

HeaderScreen.defaultProps = {
    screen: '',
    route: '',
    state: {},
    match: {},
    current: {},
    openPanel: () => {},
    closePanel: () => {},
};

export default HeaderScreen;
