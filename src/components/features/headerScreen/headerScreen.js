import React from 'react';
import PropTypes from 'prop-types';
import {
    HiArrowCircleLeft, HiPlusCircle, HiPencil,
} from 'react-icons/hi';

// Feature
import {
    Button,
    Filter,
} from '..';

// Utils
import {
    panelUtility,
    permissionUtility,
} from '../../utilities';

const {
    isOpen,
    actions,
} = panelUtility;

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
    const { openPanel, closePanel, getDetail, state, title, panels } = props;
    const { panel, current, model, detail } = state;
    const { permissions } = current;
    const permission = getPermissionModel(permissions, model);

    /**
     *
     * @param id
     */
    const update = () => {
        if (detail.id) {
            openPanel(panelUtility.actions.update);
            getDetail(detail.id);
        }
    };

    const hasFilter = !panels || !isOpen(panel);
    const hasEdit = (panels && (isOpen(panel) && panel.action === 'show') && permission.update);

    return (
        <div className="header-screen">
            <div className="content left">
                {
                    (panels && panels.create) && (
                        <Button
                            action={() => (isOpen(panel) ? closePanel() : openPanel(actions.create))}
                            icon={isOpen(panel) ? HiArrowCircleLeft : HiPlusCircle}
                            className="button add"
                        />
                    )
                }
                <span>{title}</span>
            </div>
            <div className="content right">
                {
                    hasFilter && (
                        <Filter {...props} />
                    )
                }
                {
                    hasEdit && (
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
    openPanel: PropTypes.func,
    closePanel: PropTypes.func,
    getDetail: PropTypes.func,
    panels: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

HeaderScreen.defaultProps = {
    title: '',
    state: {},
    openPanel: () => {},
    closePanel: () => {},
    getDetail: () => {},
    panels: false,
};

export default HeaderScreen;
