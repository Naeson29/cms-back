import { creators as PanelCreators } from '../../actions/Panel';

export default function (dispatch) {
    return {
        close: () => {
            dispatch(PanelCreators.close.do());
        },
        open: (panel, parameters, callbacks) => {
            dispatch(PanelCreators.open.do(panel, parameters, callbacks));
        },
    };
}
