import { creators as ModalCreators } from '../../Actions/Modal';

export default dispatch => ({
    openModal: (modal) => {
        dispatch(ModalCreators.open.do(modal));
    },
    closeModal: () => {
        dispatch(ModalCreators.close.do());
    },
});
