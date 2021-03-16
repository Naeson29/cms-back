/**
 *
 * @param roles
 * @returns {{edit: *, trash: boolean}}
 * @constructor
 */
const AllowUser = (roles) => {
    const { isAdmin, isSuperUser, isUser, isMe } = roles;
    return {
        edit: isAdmin || isSuperUser || (isUser && isMe),
        trash: (isAdmin && !isMe) || (isSuperUser && !isMe),
    };
};

const AllowSlider = () => {

};

export {
    AllowUser, AllowSlider,
};
