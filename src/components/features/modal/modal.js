import React from 'react';
import ReactModal from 'react-modal';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
    HiTrash, HiX,
} from 'react-icons/hi';

// Feature
import Button from '../button';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Modals = (props) => {
    const { state, destroy, closeModal } = props;
    const { modal = {} } = state;
    const { open, params, title = '', content } = modal;
    const { t } = useTranslation('modal');

    return (
        <ReactModal
            isOpen={open}
            appElement={document.getElementById('root')}
            className="modal"
            overlayClassName="overlay"
        >
            {
                modal.open
                && (
                    <div className="content-modal">
                        <div className="card">
                            <div className="card-title">
                                <p>{title}</p>
                                <Button
                                    action={() => closeModal()}
                                    icon={HiX}
                                    className="close"
                                />
                            </div>
                            <div className="card-content">
                                {content}
                            </div>
                            <div className="action">
                                {
                                    modal.destroy && (
                                        <Button
                                            action={() => destroy(params.id)}
                                            icon={HiTrash}
                                            className="button trash"
                                            text={t('buttons.delete')}
                                        />
                                    )
                                }
                                <Button
                                    action={() => closeModal()}
                                    icon={HiX}
                                    className="button cancel"
                                    text={t('buttons.cancel')}
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </ReactModal>
    );
};

Modals.propTypes = {
    closeModal: PropTypes.func,
    destroy: PropTypes.func,
    state: PropTypes.oneOfType([PropTypes.object]),
};

Modals.defaultProps = {
    closeModal: () => {},
    destroy: () => {},
    state: {},
};

export default Modals;
