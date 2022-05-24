import React from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '..';
import { HiArrowCircleLeft } from 'react-icons/hi';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Unauthorized = (props) => {
    const { t } = props;
    const history = useHistory();

    return (
        <div className="fragment">
            <div className="header-screen">
                <div className="content left">
                    <Button
                        action={() => history.goBack()}
                        icon={HiArrowCircleLeft}
                        className="button add"
                    />
                </div>
                <span>{t('title')}</span>
            </div>
        </div>
    );
};

Unauthorized.propTypes = {
    t: PropTypes.func,
};

Unauthorized.defaultProps = {
    t: () => {},
};

export default withTranslation('unauthorized')(Unauthorized);

