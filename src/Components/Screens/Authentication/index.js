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
            parameters: {
                username: '',
                password: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(attribute, value) {
        const { parameters } = this.state;
        const newItem = { ...parameters };
        newItem[attribute] = value;

        this.setState({
            parameters: { ...newItem },
        });
    }

    login(event) {
        const { actionForm } = this.props;
        const { parameters } = this.state;
        event.preventDefault();
        actionForm(parameters);
    }

    render() {
        const { parameters } = this.state;
        const { username, password } = parameters;

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

const LoginScreen = withTranslation('authentication')(Login);

export default LoginScreen;