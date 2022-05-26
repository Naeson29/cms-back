import React from 'react';

export default {
    destroy: (key, t) => {
        const { first_name, last_name } = key;
        return {
            content: (
                <div className="card-text">
                    <p className="message">{t('user:destroy')}</p>
                    <p className="complement">{`${first_name} ${last_name}`}</p>
                </div>
            ),
        };
    },
};
