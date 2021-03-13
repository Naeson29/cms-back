export const roles = {
    admin: 1,
    superUser: 2,
    user: 3,
};

export const getRoles = current => ({
    isAdmin: roles.admin === current.role,
    isSuperUser: roles.superUser === current.role,
    isUser: roles.user === current.role,
});
