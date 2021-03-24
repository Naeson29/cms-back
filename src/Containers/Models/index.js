import User from './User';

export default (model) => {
    switch (model) {
    case 'user': {
        return User;
    }
    default: {
        return null;
    }
    }
};
