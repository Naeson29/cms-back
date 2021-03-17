import { creators as PanelCreators } from '../../actions/Panel';

export default dispatch => ({
    openPanel: (panel) => {
        dispatch(PanelCreators.open.do(panel));
    },
    closePanel: () => {
        dispatch(PanelCreators.close.do());
    },
});
