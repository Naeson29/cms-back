import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HiArrowCircleLeft } from 'react-icons/hi';
import { Button } from '..';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Unauthorized = (props) => {
    const history = useHistory();
    const { t } = useTranslation('unauthorized');

    return (
        <div className="fragment">
            <div className="header-screen">
                <div className="content left">
                    <Button
                        action={() => history.goBack()}
                        icon={HiArrowCircleLeft}
                        className="button add"
                    />
                    <span>{t('title')}</span>
                </div>
            </div>
        </div>
    );
};

Unauthorized.propTypes = {
};

Unauthorized.defaultProps = {
};

export default Unauthorized;
