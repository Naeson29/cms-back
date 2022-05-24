import React from 'react';
import { withTranslation } from 'react-i18next';
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
        t,
        elements,
        handleSubmit,
        handleChange,
        handleUpload,
        errors,
        data,
        columns,
        update,
        disabled,
    } = props;

    const history = useHistory();

    const classNames = {
        1: 'full',
        2: 'half',
    };

    const column1 = elements.filter(el => el.column === 1);
    const column2 = elements.filter(el => el.column === 2);

    const columnArray = [column1];

    if (column2.length > 0) {
        columnArray.push(column2);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-content">
                <div className="columns">
                    {
                        columnArray.map((col, index) => (
                            <div className={classNames[columns]} key={`column_${index.toString()}`}>
                                {
                                    col.map((key) => {
                                        const { element } = key;
                                        const Component = formUtility(element);
                                        const value = data[key.name];

                                        return (
                                            <Component
                                                t={t}
                                                key={`field_${key.name}`}
                                                attributes={key}
                                                handleChange={handleChange}
                                                handleUpload={handleUpload}
                                                value={value}
                                                error={(errors && !!errors[key.name]) && errors[key.name]}
                                                update={update}
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
                    text={update ? t('buttons:update') : t('buttons:add')}
                    disabled={disabled}
                />
                <Button
                    action={() => history.goBack()}
                    className="button cancel"
                    text={t('buttons:cancel')}
                />
            </div>
        </form>
    );
};

Form.propTypes = {
    t: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleUpload: PropTypes.func,
    columns: PropTypes.number,
    update: PropTypes.bool,
    disabled: PropTypes.bool,
    elements: PropTypes.oneOfType([PropTypes.array]),
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    data: PropTypes.oneOfType([PropTypes.object]),    
};

Form.defaultProps = {    
    t: () => {},
    handleSubmit: () => {},
    handleChange: () => {},
    handleUpload: () => {},
    elements: [],
    errors: false,
    data: {},
    columns: 1,
    update: false,
    disabled: false,
};

export default withTranslation('form')(Form);