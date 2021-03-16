/**
 *
 * @param roles
 * @returns {{edit: *, trash: boolean}}
 * @constructor
 */
const AllowUserButton = (roles) => {
    const { isAdmin, isSuperUser, isUser, isMe } = roles;
    return {
        edit: isAdmin || isSuperUser || (isUser && isMe),
        trash: (isAdmin && !isMe) || (isSuperUser && !isMe),
    };
};

const AllowSlider = () => {

};

export {
    AllowUserButton, AllowSlider,
};
