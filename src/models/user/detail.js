
import React from 'react';

export default (key) => {
    const { first_name, last_name } = key;
    return (
        <div>
            <p>{`${first_name} ${last_name}`}</p>
        </div>
    );
};
