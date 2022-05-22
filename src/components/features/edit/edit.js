import React, {
    useState,
} from 'react';
import PropTypes from 'prop-types';

// Utils
import {
    validatorUtility,
} from '../../utilities';


// features
import {
    Form,
} from '..';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Edit = (props) => {
    const { form, state, action, create, update } = props;
    const { loadings = {} } = state;

    if (!form) {
        return null;
    }

    const { detail } = state;
    const isUpdate = action === 'update';
    const { elements = [], validation = false, columns = 1 } = form(action);

    const getValue = (item) => {
        let valueElement = '';
        if (isUpdate) {
            valueElement = detail[item.name];
        } else if (item.value || item.value === false) {
            valueElement = item.value;
        }
        return valueElement;
    };

    const [data, setData] = useState(elements.reduce((obj, item) => ({
        ...obj,
        [item.name]: getValue(item),
    }), {}));

    const [modified, setModified] = useState(false);
    const [errors, setErrors] = useState(false);

    const handleSubmit = () => {
        if (loadings.edit) {
            return;
        }

        let validator = { success: true };

        if (validation) {
            validator = validatorUtility(data, validation);
        }
        if (validator.success) {
            if (isUpdate) update(detail.id, data);
            else create(data);
        }
        if (validator.error) {
            setErrors(validator.error);
        }
    };

    const handleChange = (key, value) => {
        if (errors[key]) {
            delete errors[key];
            setErrors(errors);
        }
        setModified(true);
        setData({
            ...data,
            [key]: value,
        });
    };

    const handleUpload = (key, imageList) => {
        if (imageList.length > 0) {
            setModified(true);
            setData({
                ...data,
                [key]: imageList,
            });
        }
    };

    return (
        <Form
            {...props}
            elements={elements}
            data={data}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleUpload={handleUpload}
            errors={errors}
            columns={columns}
            disabled={isUpdate && !modified}
        />
    );
};

Edit.propTypes = {
    form: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    state: PropTypes.oneOfType([PropTypes.object]),
    action: PropTypes.string,
    create: PropTypes.func,
    update: PropTypes.func,
};

Edit.defaultProps = {
    form: () => ({}),
    state: {},
    action: 'create',
    create: () => {},
    update: () => {},
};

export default Edit;
