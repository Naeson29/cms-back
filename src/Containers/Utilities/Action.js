// Creators
import { creators as UserCreators } from '../../Actions/User';

const actions = {
    user: UserCreators,
};

export default model => (actions[model]);
