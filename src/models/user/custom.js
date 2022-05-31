import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/features';


const custom = {
    passwordButton: () => {
        const history = useHistory();

        return (
            <div className="container-field container-buuton">
                <Button
                    action={() => history.push('/users/password')}
                    className="button"
                    text="Changer le mot de passe"
                />
            </div>
        );
    },
};

custom.passwordButton.propTypes = {
};

custom.passwordButton.defaultProps = {
};

export default custom;
