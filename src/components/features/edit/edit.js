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
    const { form, state, current, data, create, update, id } = props;
    const { loadings, errors } = state;
    const { t } = useTranslation('validator');

    if (!form || (update && !id)) {
        return null;
    }

    const { elements = [], validation = false, columns = 1 } = form({
        t, data, current,
    });

    const getValue = (item) => {
        let val = '';
        if (update) {
            val = data[item.name] === undefined ? val : data[item.name];
        } else if ('value' in item) {
            val = item.value;
        }
        return val;
    };

    const [stateData, setData] = useState(elements.reduce((obj, item) => ({
        ...obj,
        [item.name]: getValue(item),
    }), {}));

    const [modified, setModified] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [errorsObject, setErrors] = useState(false);

    const handleSubmit = () => {
        if (loadings.edit) {
            return;
        }

        const validator = validation ? validatorUtility({
            t,
            data: stateData,
            validation,
        }) : { success: true };

        if (validator.errors) {
            setErrors(validator.errors);
        }
        if (validator.success) {
            setErrors(false);
            setSubmited(true);

            if (update) {
                update(id, stateData);
                setModified(false);
            } else {
                create(stateData);
            }
        }
    };

    const handleChange = (key, value) => {
        if (errorsObject[key]) {
            delete errorsObject[key];
            setErrors(errorsObject);
        }
        setData({
            ...stateData,
            [key]: value,
        });
        if (update) {
            setModified(true);
        }
    };

    const handleUpload = (key, imageList) => {
        setData({
            ...stateData,
            [key]: imageList,
        });
        if (update && imageList.length > 0) {
            setModified(true);
        }
    };

    useEffect(() => {
        if (submited && errors.edit) {
            const errorEdit = errorsUtility(errors.edit, t);
            setErrors(errorEdit);
        }
    }, [errors.edit]);

    const disabled = (update && !modified);

    return (
        <Form
            {...props}
            data={stateData}
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
    data: PropTypes.oneOfType([PropTypes.object]),
    current: PropTypes.oneOfType([PropTypes.object]),
    create: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    update: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

Edit.defaultProps = {
    form: () => ({}),
    state: {},
    data: {},
    current: {},
    create: false,
    update: false,
    id: false,
};

export default Edit;
