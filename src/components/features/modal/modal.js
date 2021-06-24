import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import {
    HiCheck, HiX,
} from 'react-icons/hi';

// Feature
import Button from '../button';
import { isOpen } from '../../utilities/modal';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Modals = (props) => {
    const { state, destroy, closeModal } = props;
    const { modal = {} } = state;
    const { open, params, content } = modal;

    return (
        <ReactModal
            isOpen={open}
            appElement={document.getElementById('root')}
            className="modal"
            overlayClassName="overlay"
        >
            {
                isOpen(modal)
                && (
                    <div className="content-modal">
                        <div className="card">
                            <div className="card-content">
                                {content}
                                <div className="action">
                                    <Button
                                        action={() => destroy(params.id)}
                                        icon={HiCheck}
                                        className="button yes"
                                    />
                                    <Button
                                        action={() => closeModal()}
                                        icon={HiX}
                                        className="button no"
                                    />
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
