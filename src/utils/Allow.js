
export const AllowUser = (roles) => {
    const {isAdmin, isSuperUser, isUser, isMe} = roles
    return {
        edit : isAdmin || isSuperUser || (isUser && isMe),
        trash : (isAdmin && !isMe) || (isSuperUser && !isMe)
    }
};