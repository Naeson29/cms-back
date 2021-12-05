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
    const { form, state, action, update } = props;
    const { detail } = state;
    const isUpdate = action === 'update';
    const [data, setData] = useState(form.reduce((obj, item) => ({
        ...obj,
        [item.name]: isUpdate ? detail[item.name] : '',
    }), {}));

    const handleSubmit = () => {
        if (isUpdate) update(detail.id, data);
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
                        const Component = formUtility(key.html);
                        return (
                            <Component
                                key={index.toString()}
                                attributes={key}
                                handleChange={handleChange}
                                value={isUpdate ? detail[key.name] : ''}
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
    update: PropTypes.func,
};

Edit.defaultProps = {
    form: [],
    state: {},
    action: 'create',
    update: () => {},
};

export default Edit;
