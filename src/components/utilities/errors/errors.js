const errors = (error, t) => {
    const { data } = error;
    return {
        ...data.field && {
            [data.field]: t(`errors:${data.code}`),
        },
    };
};

export default errors;
