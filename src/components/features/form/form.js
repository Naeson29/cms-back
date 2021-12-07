import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '..';
import {
    formUtility,
} from '../../utilities';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Form = (props) => {
    const { elements, handleSubmit, handleChange, closePanel, errors, data, columns } = props;

    const classNames = {
        1: 'full',
        2: 'half',
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="columns">
                <div className={classNames[columns]}>
                    {
                        elements.map((key) => {
                            const Component = formUtility(key.element);
                            return (
                                <Component
                                    key={`field_${key.name}`}
                                    attributes={key}
                                    handleChange={handleChange}
                                    value={data[key.name]}
                                    error={errors && !!errors[key.name]}
                                />
                            );
                        })
                    }
                </div>
            </div>
            <div className="action">
                <Button
                    action={closePanel}
                    className="button cancel"
                    text="Annuler"
                />
                <Button
                    action={handleSubmit}
                    className="button submit"
                    text="Ajouter"
                />
            </div>
        </form>
    );
};

Form.propTypes = {
    elements: PropTypes.oneOfType([PropTypes.array]),
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    closePanel: PropTypes.func,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    data: PropTypes.oneOfType([PropTypes.object]),
    columns: PropTypes.number,
};

Form.defaultProps = {
    elements: [],
    handleSubmit: () => {},
    handleChange: () => {},
    closePanel: () => {},
    errors: false,
    data: {},
    columns: 1,
};

export default Form;
