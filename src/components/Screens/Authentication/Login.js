import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

// Functions
import { withTranslation } from 'react-i18next';

// Components

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formErrors: {},
            parameters: {
                username: '',
                password: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.hasError = this.hasError.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(attribute, value) {
        const newItem = { ...this.state.parameters };
        newItem[attribute] = value;

        this.setState({
            parameters: { ...newItem }, formErrors: {},
        });
    }

    checkForm() {
        const { parameters } = this.state;
        const errors = {};

        Object.keys(parameters).map((key) => {
            if (!parameters[key]) {
                errors[key] = true;
            }
        });

        this.setState({ formErrors: errors });
        return Object.keys(errors).length === 0;
    }

    hasError() {
        const { formErrors } = this.state;
        if (!Object.keys(formErrors).length && !this.props.error) {
            return;
        }
        return (
            <span className="error">Utilisateur et/ou mot de passe incorrect(s)</span>
        );
    }

    login(event) {
        event.preventDefault();

        if (!this.checkForm()) {
            return;
        }

        this.props.actionForm(this.state.parameters);
    }

    render() {
        const { username, password } = this.state.parameters;

        return (
            <div className="container-app-login">
                <div className="form-login">
                    <h1>Se connecter</h1>
                    <form className="forms" onSubmit={this.login}>
                        <fieldset>
                            <div className="bloc-form">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    autoFocus
                                    className="input"
                                    placeholder="Adresse email"
                                    value={username}
                                    onChange={event => this.handleChange('username', event.target.value)}
                                />
                            </div>
                            <div className="bloc-form">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="input"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={event => this.handleChange('password', event.target.value)}
                                />
                                {this.hasError()}
                            </div>
                            <div className="submit-button">
                                <Button color="primary">Connexion</Button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    actionForm: PropTypes.func,
};

Login.defaultProps = {
    actionForm: () => {},
};

const LoginScreen = withTranslation('LoginScreen')(Login);

export default LoginScreen;
