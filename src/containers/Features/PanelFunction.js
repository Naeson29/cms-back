import { creators as PanelCreators } from '../../actions/Panel';

export default function (dispatch) {
    return {
        closeModal: () => {
            dispatch(PanelCreators.close.do());
        },
        openModal: (panel, parameters, callbacks) => {
            dispatch(PanelCreators.open.do(panel, parameters, callbacks));
        },
    };
}
