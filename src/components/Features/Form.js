import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Form = () => {
    return (
        <div className={'form'}>

        </div>
    );
};

Form.propTypes = {
    contextClass: PropTypes.string,
};

Form.defaultProps = {
    contextClass: 'loading-fragment',
};

export default Form;
