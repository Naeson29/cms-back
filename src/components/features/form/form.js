import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    Button,
} from '..';
import {
    formUtility,
} from '../../utilities';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Form = (props) => {
    const {
        elements,
        handleSubmit,
        handleChange,
        handleUpload,
        errors,
        data,
        columns,
        action,
    } = props;

    const history = useHistory();
    const isUpdate = action === 'update';

    const classNames = {
        1: 'full',
        2: 'half',
    };

    const column1 = elements.filter(el => el.column === 1);
    const column2 = elements.filter(el => el.column === 2);

    const columnsObject = {
        1: column1,
        ...column2.length > 0 && { 2: column2 },
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-content">
                <div className="columns">
                    {
                        Object.keys(columnsObject).map((col, index) => (
                            <div className={classNames[columns]} key={`column_${index.toString()}`}>
                                {
                                    columnsObject[col].map((key) => {
                                        const Component = formUtility(key.element);
                                        return (
                                            <Component
                                                key={`field_${key.name}`}
                                                attributes={key}
                                                handleChange={handleChange}
                                                handleUpload={handleUpload}
                                                value={data[key.name]}
                                                error={(errors && !!errors[key.name]) && errors[key.name]}
                                            />
                                        );
                                    })
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="action">
                <Button
                    action={handleSubmit}
                    className="button submit"
                    text={isUpdate ? 'Modifier' : 'Ajouter'}
                />
                <Button
                    action={() => history.goBack()}
                    className="button cancel"
                    text="Annuler"
                />
            </div>
        </form>
    );
};

Form.propTypes = {
    elements: PropTypes.oneOfType([PropTypes.array]),
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleUpload: PropTypes.func,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    data: PropTypes.oneOfType([PropTypes.object]),
    columns: PropTypes.number,
    action: PropTypes.string,
};

Form.defaultProps = {
    elements: [],
    handleSubmit: () => {},
    handleChange: () => {},
    handleUpload: () => {},
    errors: false,
    data: {},
    columns: 1,
    action: 'create',
};

export default Form;
