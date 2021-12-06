import React, {
    useState,
} from 'react';
import PropTypes from 'prop-types';

// Utils
import { HiSave } from 'react-icons/hi';
import { formUtility } from '../../utilities';

// features
import { Button } from '..';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Edit = (props) => {
    const { form, state, action, create, update } = props;
    const { detail } = state;
    const isUpdate = action === 'update';

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

    const [data, setData] = useState(form.reduce((obj, item) => ({
        ...obj,
        [item.name]: getValue(item),
    }), {}));

    const handleSubmit = () => {
        if (isUpdate) update(detail.id, data);
        else create(data);
    };

    const handleChange = (key, event) => {
        setData({
            ...data,
            [key]: event.target.value,
        });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="col-left">
                {
                    form.map((key, index) => {
                        const Component = formUtility(key.element);
                        return (
                            <Component
                                key={index.toString()}
                                attributes={key}
                                handleChange={handleChange}
                                value={data[key.name]}
                            />
                        );
                    })
                }
            </div>
            <Button
                action={handleSubmit}
                className="button submit"
                icon={HiSave}
            />
        </form>
    );
};

Edit.propTypes = {
    form: PropTypes.oneOfType([PropTypes.array]),
    state: PropTypes.oneOfType([PropTypes.object]),
    action: PropTypes.string,
    create: PropTypes.func,
    update: PropTypes.func,
};

Edit.defaultProps = {
    form: [],
    state: {},
    action: 'create',
    create: () => {},
    update: () => {},
};

export default Edit;
