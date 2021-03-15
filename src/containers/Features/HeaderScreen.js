import { connect } from 'react-redux';
import HeaderScreen from '../../components/Features/HeaderScreen';
import PanelFunction from './PanelFunction';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    ...PanelFunction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderScreen);
