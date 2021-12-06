import { Input } from '../../features';

export default (element) => {
    const elements = {
        input: Input,
    };
    return elements[element];
};
