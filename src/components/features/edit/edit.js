import React, {
    useState,
} from 'react';
import PropTypes from 'prop-types';

// Utils
import {
    validatorUtility, modalUtility,
} from '../../utilities';


// features
import {
    Form,
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
        if (errors[key]) {
            delete errors[key];
            setErrors(errors);
        }
        setData({
            ...data,
            [key]: event.target.value,
        });
    };

    const handleUpload = (key, imageList) => {
        const images = imageList.map(image => ({
            base64: image.data_url,
        }));

        setData({
            ...data,
            [key]: images,
        });
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
            columns={2}
        />
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
