import { connect } from 'react-redux';
import Modal from '../../components/Features/Modal';
import {open, params, type} from "../../selectors/Modal";
import {creators} from "../../actions/Modal";
import {creators as UserCreators} from "../../actions/User";

const mapStateToProps = (state) => {
    return {
        open : open(state),
        type : type(state),
        params : params(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        close : ()=> {
            dispatch(creators.close.do());
        },
        destroy : (params)=> {
            let creator;
            switch (params.action){
                case 'User':
                    creator = UserCreators;
                break;

                default :
                    creator = null
            }

            if(creator === null)
                return;

            dispatch(creator.destroy.request(params.id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);