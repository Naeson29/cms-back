import React from 'react';

const Show = (props) => {
    const {detail} = props;
    const {last_name, first_name} = detail;

    return (
        <div>
            <p>{`${first_name} ${last_name}`}</p>
        </div>
    );
};

export default Show;
