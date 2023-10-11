import axios from '../axios/axiosConfiguration';

const login = async function(username, password) {
    let response = await axios.post('/login', {
        password: password,
        username: username,
    });
    console.log(response.data);
    return response.data;
}

export default login;