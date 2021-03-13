// Library
import React, { PureComponent } from 'react';
import {
    Col, Container, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';

// Components

import { withTranslation } from 'react-i18next';

class Store extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { initialData, submit, t } = this.props;

        return (
            <Container fluid>


                <Row className="justify-content-center px-3">

                    <Col xl={12} />

                </Row>

            </Container>
        );
    }
}

Store.propTypes = {
    initialData: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
    t: PropTypes.func,
};

Store.defaultProps = {
    t: () => {},
};

const StoreScreen = withTranslation('Users')(Store);

export default StoreScreen;
