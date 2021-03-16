import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import {
    HiCheck, HiX,
} from 'react-icons/hi';
import { Modal } from '../../utils/Modal';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Modals = (props) => {
    const { open, type, params, close, destroy } = props;

    /**
     *
     * @returns {JSX.Element}
     * @constructor
     */
    const Component = () => {
        switch (type) {
        case Modal.DELETE: {
            return (
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
            );
        }
        default:
            return (<div />);
        }
    };


    return (
        <ReactModal
            isOpen={open}
            appElement={document.getElementById('root')}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="content-modal">
                <div className="card">
                    <Component />
                </div>
            </div>
        </ReactModal>
    );
};

Modals.propTypes = {
    open: PropTypes.bool,
    type: PropTypes.string,
    params: PropTypes.oneOfType([PropTypes.object]),
    close: PropTypes.func,
    destroy: PropTypes.func,
};

Modals.defaultProps = {
    open: true,
    type: null,
    params: {},
    close: () => {},
    destroy: () => {},
};

export default Modals;
