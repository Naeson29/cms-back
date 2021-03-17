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
    const { modal, destroy } = props;
    const {open, params} = modal;

    return (
        <ReactModal
            isOpen={open}
            appElement={document.getElementById('root')}
            className="modal"
            overlayClassName="overlay"
        >
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
                                onClick={() => destroy(params.destroy)}
                                type="button"
                            >
                                <HiCheck className="icon" />
                            </button>
                            <button
                                className="button no"
                                onClick={() => close()}
                                type="button"
                            >
                                <HiX className="icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
};

Modals.propTypes = {
    modal: PropTypes.oneOfType([PropTypes.object]),
    close: PropTypes.func,
    destroy: PropTypes.func,
};

Modals.defaultProps = {
    modal: {},
    close: () => {},
    destroy: () => {},
};

export default Modals;
