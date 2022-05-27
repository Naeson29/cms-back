import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/features';

const cutsom = {
    passwordButton: (props) => {
        const { openPanel, closePanel, state } = props;
        const { panel = {} } = state;
        const panelOpen = panel.open && panel.password;

        const tooglePassword = () => (panelOpen ? closePanel() : openPanel({
            open: true,
            content: <div />,
            password: true,
        }));

        return (
            <div className="container-field container-buuton">
                <Button
                    action={tooglePassword}
                    className="button"
                    text="Changer le mot de passe"
                />
            </div>
        );
    },
};

cutsom.passwordButton.propTypes = {
    openPanel: PropTypes.func,
    closePanel: PropTypes.func,
    state: PropTypes.oneOfType([PropTypes.object]),
};

cutsom.passwordButton.defaultProps = {
    openPanel: () => {},
    closePanel: () => {},
    state: {},
};

export default cutsom;
