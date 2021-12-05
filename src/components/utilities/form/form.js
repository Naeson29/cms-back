import { Input } from '../../features';

export default (element) => {
    switch (element) {
    case 'input': {
        return Input;
    }
    default: {
        return null;
    }
    }
};
