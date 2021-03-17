// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../../Features/List';
import {
    setPanels,
} from '../../Utilities/Panel';

// Utils
import { getImage } from '../../../Utilities/Functions';

// Components
import HeaderScreen from '../../Features/HeaderScreen';
import Panel from '../../Features/Panel';
import Modal from '../../Features/Modal';
import Loading from '../../Features/Loading';

class Index extends Component {
    constructor(props) {
        super(props);
        props.load();
    }

    render() {
        const { props } = this;
        const { state } = props;
        const { model, loadingList } = state;
        const panels = setPanels(model);

        return (
            <div className={`fragment ${model}`}>
                <HeaderScreen
                    {...props}
                    type="list"
                    panel={panels.create}
                    title="Utilisateurs"
                />
                {
                    loadingList ? <Loading />

                        : (
                            <List
                                {...props}
                                type="small"
                                panels={panels}
                                content={(key) => {
                                    const { firstName, lastName, image } = key;
                                    return (
                                        <div className="card-user">
                                            <div
                                                style={{
                                                    backgroundImage: `url(${image ? getImage(image, 'thumb') : './img/avatar.png'})`,
                                                }}
                                                className="image"
                                            />
                                            <p className="name">{`${firstName} ${lastName}`}</p>
                                        </div>
                                    );
                                }}
                                loading={Loading({ contextClass: 'loading-list' })}
                            />
                        )
                }
                <Panel {...props} loadingComponent={<Loading />} />
                <Modal {...props} />
            </div>
        );
    }
}

Index.propTypes = {
    load: PropTypes.func,
    state: PropTypes.oneOfType([PropTypes.object]),
};

Index.defaultProps = {
    load: () => {},
    state: {},
};

export default Index;
