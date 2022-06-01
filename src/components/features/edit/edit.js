import React, {
    useState,
    useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

// Utils
import {
    validatorUtility,
    errorsUtility,
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
    const { form, state, current, create, update, id } = props;
    const { loadings = {}, detail, errors } = state;
    const { t } = useTranslation('validator');

    if (id) {
        detail.id = id;
    }

    if (!form || !detail.id) {
        return null;
    }

    const { elements = [], validation = false, columns = 1 } = form(t, detail, current);

    const getValue = (item) => {
        let val = '';
        if (update) {
            val = detail[item.name] === undefined ? val : detail[item.name];
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
    const [errorsObject, setErrors] = useState(false);

    const handleSubmit = () => {
        if (loadings.edit) {
            return;
        }

        const validator = validation ? validatorUtility({
            t,
            data,
            validation,
        }) : { success: true };

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
        if (errorsObject[key]) {
            delete errorsObject[key];
            setErrors(errorsObject);
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

    useEffect(() => {
        if (errors.edit) {
            const errorEdit = errorsUtility(errors.edit, t);
            setErrors(errorEdit);
        }
    }, [errors]);

    const disabled = (update && !modified);

    return (
        <Form
            {...props}
            data={data}
            elements={elements}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleUpload={handleUpload}
            errors={errorsObject}
            columns={columns}
            update={!!update}
            disabled={disabled}
        />
    );
};

Edit.propTypes = {
    form: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    state: PropTypes.oneOfType([PropTypes.object]),
    current: PropTypes.oneOfType([PropTypes.object]),
    create: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    update: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    id: PropTypes.oneOfType([PropTypes.number]),
};

Edit.defaultProps = {
    form: () => ({}),
    state: {},
    current: {},
    create: false,
    update: false,
    id: null,
};

export default Edit;
