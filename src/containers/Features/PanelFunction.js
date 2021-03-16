import { creators as PanelCreators } from '../../actions/Panel';

export default (dispatch) => ({
    closePanel: () => {
        dispatch(PanelCreators.close.do());
    },
    openPanel: (panel) => {
        dispatch(PanelCreators.open.do(panel));
    },
});
