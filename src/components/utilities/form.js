import { Input } from '../features';

export default (html) => {
    switch (html) {
    case 'input': {
        return Input;
    }
    default: {
        return null;
    }
    }
};
