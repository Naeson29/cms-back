import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/features';

const cutsom = {
    passwordButton: (props) => {
        const { openPanel } = props;

        return (
            <div className="container-field container-buuton">
                <Button
                    action={() => openPanel({
                        open: true,
                        content: <div />,
                    })}
                    className="button"
                    text="Changer le mot de passe"
                />
            </div>
        );
    },
};

cutsom.passwordButton.propTypes = {
    openPanel: PropTypes.func,
};

cutsom.passwordButton.defaultProps = {
    openPanel: () => {},
};

export default cutsom;
