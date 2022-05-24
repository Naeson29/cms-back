const addText = 'Add';
const updateText = 'Modify';
const cancelText = 'Cancel';
const closeText = 'Close';
const deleteText = 'Delete';

export default {
    authentication: {

    },
    default: {
        title: {
            index: 'Page title',
        },
    },
    user: {
        title: {
            index: 'Users',
            create: 'Add a new user',
            update: 'Edit user',
            show: 'User file',
        },
    },
    publication: {
        title: {
            index: 'Publications',
            create: 'Add a post',
            update: 'Edit post',
            show: 'Publication detail',
        },
    },
    unauthorized: {
        title: 'Unauthorized page',
    },
    list: {
        results: 'result(s)',
    },
    form: {
        buttons: {
            add: addText,
            update: updateText,
            cancel: cancelText,
        },
    },
    filter: {
        titles: {
            search: 'Search',
            order: 'Classify',
            filter: 'Filter',
        },
        buttons: {
            apply: 'Apply',
            close: closeText,
        },
    },
    modal: {
        buttons: {
            delete: deleteText,
            cancel: cancelText,
        },
    },
    upload: {
        volume: 'The photo is too large (Maximum 2MB)',
        buttons: {
            delete: 'Delete all'
        },
    },
    validator: {
        required: 'The {label} field is required',
        email: 'Invalid email address',
        password: {
            length: 'Minimum 8 characters for the password',
            same: 'Passwords are not the same'
        },
        image: {
            volumeOne: 'The photo is too large',
            volumeMany: 'One or more images are too large'
        },
    }
};
