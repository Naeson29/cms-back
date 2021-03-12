import React, {Component} from 'react';
import Modal from 'react-modal';
import PropTypes from "prop-types";
import {MODALS} from "../../utils/Modals";

class Modals extends Component {

    render() {
        const {open, type, params, close, destroy} = this.props;
        let component;

        switch(type) {
            case MODALS.DELETE:
                component = (
                    <div className={'card-content'}>
                        <div className={'card-text'}>
                            <p className={'message'}>{params.message}</p>
                            <p className={'complement'}>{params.complement}</p>
                        </div>
                        <div className={'action'}>
                            <button
                                className={'button yes'}
                                onClick={()=> destroy(params.destroy)}
                            >
                                {'Oui'}
                            </button>
                            <button
                                className={'button no'}
                                onClick={()=> close()}
                            >
                                {'Non'}
                            </button>
                        </div>
                    </div>
                );
            break;

            default:
                component = (<div/>);
            break;
        }


        return (
            <Modal
                isOpen={open}
                onAfterOpen={()=>{}}
                onRequestClose={()=>{}}
                contentLabel="Example Modal"
                appElement={document.getElementById('root')}
                className={'modal'}
                overlayClassName={'overlay'}
            >
                <div className={'content-modal'}>
                    <div className={'card'}>
                        {component}
                    </div>
                </div>
            </Modal>
        );
    }
}

Modals.propTypes = {
    open : PropTypes.bool,
    type : PropTypes.string,
    params : PropTypes.object,
    close : PropTypes.func,
    destroy : PropTypes.func,
};

Modals.defaultProps = {
    open : true,
    type : null,
    params : {},
    close : ()=>{},
    destroy : ()=>{},
};

export default Modals;
