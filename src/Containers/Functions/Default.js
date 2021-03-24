import { creators as ModalCreators } from '../../Actions/Modal';
import { creators as PanelCreators } from '../../Actions/Panel';

export default (dispatch, creators, paramsList) => ({

    openModal: (modal) => {
        dispatch(ModalCreators.open.do(modal));
    },
    closeModal: () => {
        dispatch(ModalCreators.close.do());
    },
    openPanel: (panel) => {
        dispatch(PanelCreators.open.do(panel));
    },
    closePanel: () => {
        dispatch(PanelCreators.close.do());
    },

    load: () => {
        if (creators) dispatch(creators.search.request(paramsList));
    },
    getDetail: (id) => {
        if (creators) dispatch(creators.read.request(id));
    },
    destroy: (id) => {
        if (creators) dispatch(creators.destroy.request(id));
    },
    getMore: (page) => {
        if (creators) {
            dispatch(creators.more.request({
                params: {
                    ...paramsList.params,
                    page,
                },
            }));
        }
    },


});
