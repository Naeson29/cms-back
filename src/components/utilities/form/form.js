import {
    Input, Upload,
} from '../../features';

export default (element) => {
    const elements = {
        input: Input,
        upload: Upload,
    };
    return elements[element];
};
