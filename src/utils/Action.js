// Creators
import { creators as UserCreators } from '../actions/User';

const actions = {
    user : UserCreators
};

export default (model) => (actions[model]);


