import { login } from '../../../api';
import { addUser } from '../../actions';

function loginUser(username, password) {

    return async function loginUserThunk(dispatch, getState) {
        let user = await login(username, password);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(addUser(user));
    }
}

export default loginUser;