import React, {
    useState,
} from 'react';
import PropTypes from 'prop-types';

// Utils
import {
    formUtility, validatorUtility, modalUtility,
} from '../../utilities';


// features
import {
    Button,
    Error,
} from '..';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Edit = (props) => {
    const { form, state, action, create, update, openModal } = props;
    const { detail } = state;
    const isUpdate = action === 'update';
    const { elements = [], validation = false } = form;

    const getValue = (item) => {
        let valueElement = '';
        if (isUpdate) {
            valueElement = detail[item.name];
        }
        if (item.value) {
            valueElement = item.value;
        }
        return valueElement;
    };

    const [data, setData] = useState(elements.reduce((obj, item) => ({
        ...obj,
        [item.name]: getValue(item),
    }), {}));

    const [errors, setErrors] = useState(false);

    const handleSubmit = () => {
        const validator = validatorUtility(data, validation);
        if (validator.success) {
            if (isUpdate) update(detail.id, data);
            else create(data);
        } else {
            setErrors(validator.error);
            openModal(modalUtility.actions.error(<Error errors={validator.error} />));
        }
    };

    const handleChange = (key, event) => {
        setData({
            ...data,
            [key]: event.target.value,
        });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="cols">
                <div className="col-left">
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
                    action={handleSubmit}
                    className="button submit"
                    text="Ajouter"
                />
            </div>
        </form>
    );
};

Edit.propTypes = {
    form: PropTypes.oneOfType([PropTypes.object]),
    state: PropTypes.oneOfType([PropTypes.object]),
    action: PropTypes.string,
    create: PropTypes.func,
    update: PropTypes.func,
    openModal: PropTypes.func,
};

Edit.defaultProps = {
    form: {},
    state: {},
    action: 'create',
    create: () => {},
    update: () => {},
    openModal: () => {},
};

export default Edit;
