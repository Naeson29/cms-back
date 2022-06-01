const addText = 'Add';
const updateText = 'Modify';
const cancelText = 'Cancel';
const closeText = 'Close';
const deleteText = 'Delete';

export default {
    authentication: {

    },
    sidebar: {
        home: 'Home',
        user: 'Users',
        publication: 'Posts',
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
            password: 'Change password',
        },
        destroy: 'Are you sure you want to delete this user ?',
        form: {
            first_name: {
                label: 'First name',
                placeholder: 'Peter...',
            },
            last_name: {
                label: 'last name',
                placeholder: 'Richard...',
            },
            email: {
                label: 'email',
                placeholder: 'exemple@mail.fr...',
            },
            password: {
                label: 'Password',
                placeholder: '*************',
            },
            newPassword: {
                label: 'New password',
            },
            oldPassword: {
                label: 'Old password',
            },
            confirmation: {
                label: 'Confirmation',
                placeholder: 'Password confirmation',
            },
            image: {
                label: 'Photo',
                complement: 'Add a picture',
                error: 'You can only add one photo',
            },
        },
        list: {
            inputSearch: 'First name and/or last name...',
            selectOrder: {
                first_name: 'First name',
                last_name: 'Last name',
                date: 'Creation date',
            },
        },
    },
    publication: {
        title: {
            index: 'Publications',
            create: 'Add a post',
            update: 'Edit post',
            show: 'Publication detail',
        },
        destroy: 'Are you sure you want to delete this post ?',
        form: {
            title: {
                label: 'Title',
                placeholder: 'Publication title...',
            },
            content: {
                label: 'Content',
                placeholder: 'Publication content...',
            },
            published: {
                label: 'Visibility',
                options: {
                    textOn: 'Published',
                    textOff: 'Not published',
                },
            },
            images: {
                label: 'Pictures',
                complement: 'Add one or more photos',
                error: 'You can add up to 4 photos',
            },
        },
        list: {
            published: 'Published',
            notPublished: 'Not published',
            inputSearch: 'Title, content...',
            selectOrder: {
                title: 'Title',
                date: 'Creation date',
            },
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
        orderSelect: {
            descending: 'Descending order',
            ascending: 'Ascending order',
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
            delete: 'Delete all',
        },
    },
    validator: {
        required: 'The {label} field is required',
        email: 'Invalid email address',
        password: {
            length: 'Minimum 8 characters for the password',
            same: 'Passwords are not the same',
        },
        image: {
            volumeOne: 'The photo is too large',
            volumeMany: 'One or more images are too large',
        },
    },
    selectMultiple: {
        allItemsAreSelected: 'Everything is selected',
        clearSearch: 'Clear search',
        clearSelected: 'Clear selection',
        noOptions: 'No options',
        search: 'Search',
        selectAll: 'Select all',
        selectAllFiltered: 'Select All (Filtered)',
        selectSomeItems: 'To select...',
        create: 'Create',
    },
    errors: {
        oldPassword: 'The old password is incorrect',
    },
};
