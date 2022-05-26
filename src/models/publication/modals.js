import React from 'react';

export default {
    destroy: (key, t) => {
        const title = key.title.length > 30 ? `"${key.title.substring(0, 30)}..."` : `"${key.title}"`;
        return {
            content: (
                <div>
                    <p className="message">{t('publication:destroy')}</p>
                    <p className="complement">
                        { title }
                    </p>
                </div>
            ),
        };
    },
};
