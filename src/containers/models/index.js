import User from './user';

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
