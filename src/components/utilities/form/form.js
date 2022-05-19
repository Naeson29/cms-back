import {
    Input, Upload, Textarea, Switch,
} from '../../features';

export default (element) => {
    const elements = {
        input: Input,
        textarea: Textarea,
        upload: Upload,
        switch: Switch,
    };
    return elements[element];
};
