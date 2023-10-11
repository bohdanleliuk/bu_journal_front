import axios from '../axios/axiosConfiguration';

const getAllSubjectsAsync = async function() {
    let response = await axios.get('/subjects');
    console.log(response.data);
    return response.data;
}

export default getAllSubjectsAsync;