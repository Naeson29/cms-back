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

        this._handleChange = this._handleChange.bind(this);
        this._hasError = this._hasError.bind(this);
        this._login = this._login.bind(this);
    }

    _handleChange(attribute, value) {
        const newItem = { ...this.state.parameters };
        newItem[attribute] = value;

        this.setState({
            parameters: { ...newItem }, formErrors: {},
        });
    }

    _checkForm() {
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

    _hasError() {
        const { formErrors } = this.state;
        if (!Object.keys(formErrors).length && !this.props.error) {
            return;
        }
        return (
            <span className="error">Utilisateur et/ou mot de passe incorrect(s)</span>
        );
    }

    _login(event) {
        event.preventDefault();

        if (!this._checkForm()) {
            return;
        }

        this.props.actionForm(this.state.parameters);
    }

    render() {
        const { t } = this.props;
        const { username, password } = this.state.parameters;

        return (
            <div className="container-app-login">
                <div className="form-login">
                    <h1>Se connecter</h1>
                    <form className="forms" onSubmit={this._login}>
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
                                    onChange={event => this._handleChange('username', event.target.value)}
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
                                    onChange={event => this._handleChange('password', event.target.value)}
                                />
                                {this._hasError()}
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
    t: PropTypes.func,
};

const LoginScreen = withTranslation('LoginScreen')(Login);

export default LoginScreen;
