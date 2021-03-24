import React from 'react';
import PropTypes from 'prop-types';

// Utils
import getComponent from '../../Utilities/Form';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Edit = (props) => {
    const { form, state, action } = props;
    const { detail } = state;
    return (
        <form className="form">
            <div className="col-left">
                {
                    form.left.map((key, index) => {
                        const Component = getComponent(key.html);
                        return (
                            <Component
                                key={index.toString()}
                                data={key}
                                value={action === 'update' ? detail[key.name] : ''}
                            />
                        );
                    })
                }
            </div>
        </form>
    );
};

Edit.propTypes = {
    form: PropTypes.oneOfType([PropTypes.object]),
    state: PropTypes.oneOfType([PropTypes.object]),
    action: PropTypes.string,
};

Edit.defaultProps = {
    form: {},
    state: {},
    action: 'create',
};

export default Edit;
