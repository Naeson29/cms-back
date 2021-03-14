import { creators as PanelCreators } from '../../actions/Panel';
import scrollBody from "../../utils/Functions";

export default function (dispatch) {
    return {
        close: () => {
            dispatch(PanelCreators.close.do());
            scrollBody(false);
        },
        open: (panel, parameters, callbacks) => {
            dispatch(PanelCreators.open.do(panel, parameters, callbacks));
            scrollBody(true);
        },
    };
}
