const forms = {
    user : [
        {
            type: 'input',
            name: 'first_name',
            require : true,
        },
        {
            type: 'input',
            name: 'last_name',
            require : true,
        },
    ]

}

/**
 *
 * @param model
 * @returns {*}
 */
const getForm = (model) => forms[model];

export default getForm;