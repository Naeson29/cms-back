import {
    Input, Upload, Textarea,
} from '../../features';

export default (element) => {
    const elements = {
        input: Input,
        textarea: Textarea,
        upload: Upload,
    };
    return elements[element];
};
