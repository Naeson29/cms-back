import { creators as ModalCreators } from '../../actions/modal';
import { creators as PanelCreators } from '../../actions/panel';

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
    getList: () => {
        if (creators) dispatch(creators.search.request(paramsList));
    },
    getDetail: (id) => {
        if (creators) dispatch(creators.read.request(id));
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
    update: (id, data) => {
        if (creators) dispatch(creators.update.request(id, data));
    },
    destroy: (id) => {
        if (creators) dispatch(creators.destroy.request(id));
    },
});
