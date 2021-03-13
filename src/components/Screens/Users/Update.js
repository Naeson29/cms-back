// Library
import React, { Component } from 'react';
import {
    Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// Components

class Update extends Component {
    constructor(props) {
        super(props);

        this.state = { activeTab: '1' };

        props.load();
    }

    _toggle(tab) {
        this.setState({ activeTab: tab });
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

Update.propTypes = {
    initialData: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
    t: PropTypes.func,
    load: PropTypes.func.isRequired,
};

Update.defaultProps = {
    t: () => {},
};

const UpdateScreen = withTranslation('Users')(Update);

export default UpdateScreen;
