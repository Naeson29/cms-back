import { creators as PanelCreators } from '../../Actions/Panel';

export default dispatch => ({
    openPanel: (panel) => {
        dispatch(PanelCreators.open.do(panel));
    },
    closePanel: () => {
        dispatch(PanelCreators.close.do());
    },
});
