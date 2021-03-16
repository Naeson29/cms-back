/**
 *
 * @type {{admin: number, user: number, superUser: number}}
 */
export const roles = {
    admin: 1,
    superUser: 2,
    user: 3,
};

/**
 *
 * @param current
 * @returns {{isSuperUser: boolean, isAdmin: boolean, isUser: boolean}}
 */
export const getRoles = current => ({
    isAdmin: roles.admin === current.role,
    isSuperUser: roles.superUser === current.role,
    isUser: roles.user === current.role,
});
