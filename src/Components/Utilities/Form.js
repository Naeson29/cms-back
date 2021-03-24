import Input from '../Features/Input';

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
