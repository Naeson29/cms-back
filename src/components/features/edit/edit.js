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
    const { form, state, create, update } = props;
    const { loadings = {} } = state;

    if (!form) {
        return null;
    }

    const { detail } = state;
    const { elements = [], validation = false, columns = 1 } = form();

    const getValue = (item) => {
        let val = '';
        if (update) {
            val = !detail[item.name] ? val : detail[item.name];
        } else if ('value' in item) {
            val = item.value;
        }
        return val;
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

        const validator = validation ? validatorUtility(data, validation) : { success: true };

        if (validator.errors) {
            setErrors(validator.errors);
        }
        if (validator.success) {
            if (update) update(detail.id, data);
            else create(data);
        }
        if (update) {
            setModified(false);
        }
    };

    const handleChange = (key, value) => {
        if (errors[key]) {
            delete errors[key];
            setErrors(errors);
        }
        setData({
            ...data,
            [key]: value,
        });
        if (update) {
            setModified(true);
        }
    };

    const handleUpload = (key, imageList) => {
        setData({
            ...data,
            [key]: imageList,
        });
        if (update && imageList.length > 0) {
            setModified(true);
        }
    };

    const disabled = (update && !modified);

    return (
        <Form
            {...props}
            data={data}
            elements={elements}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleUpload={handleUpload}
            errors={errors}
            columns={columns}
            update={!!update}
            disabled={disabled}
        />
    );
};

Edit.propTypes = {
    form: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    state: PropTypes.oneOfType([PropTypes.object]),
    create: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    update: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

Edit.defaultProps = {
    form: () => ({}),
    state: {},
    create: false,
    update: false,
};

export default Edit;
