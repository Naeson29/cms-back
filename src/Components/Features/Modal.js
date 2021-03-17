import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import {
    HiCheck, HiX,
} from 'react-icons/hi';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Modals = (props) => {
    const { state, destroy, closeModal } = props;
    const { modal } = state;
    const { open, params } = modal;

    return (
        <ReactModal
            isOpen={open}
            appElement={document.getElementById('root')}
            className="modal"
            overlayClassName="overlay"
        >
            {
                !!params
                && (
                    <div className="content-modal">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-text">
                                    <p className="message">{params.message}</p>
                                    <p className="complement">{params.complement}</p>
                                </div>
                                <div className="action">
                                    <button
                                        className="button yes"
                                        onClick={() => destroy(params.id)}
                                        type="button"
                                    >
                                        <HiCheck className="icon" />
                                    </button>
                                    <button
                                        className="button no"
                                        onClick={() => closeModal()}
                                        type="button"
                                    >
                                        <HiX className="icon" />
                                    </button>
                                </div>
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
