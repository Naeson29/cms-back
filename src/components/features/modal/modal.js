import React from 'react';
import ReactModal from 'react-modal';
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
                                            text="Supprimer"
                                        />
                                    )
                                }
                                <Button
                                    action={() => closeModal()}
                                    icon={HiX}
                                    className="button cancel"
                                    text="Annuler"
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
    state: PropTypes.oneOfType([PropTypes.object]),
    closeModal: PropTypes.func,
    destroy: PropTypes.func,
};

Modals.defaultProps = {
    state: {},
    closeModal: () => {},
    destroy: () => {},
};

export default Modals;
