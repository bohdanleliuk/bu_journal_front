const addUser = (user) => {
    return {
        type: 'login user',
        payload: user,
    }
}

export default addUser;