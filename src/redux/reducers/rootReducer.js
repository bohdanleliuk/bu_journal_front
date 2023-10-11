
const initialStore = {
    user: {},
    subjects: [],
};

const rootReducer = (store = initialStore, action) => {
    if (action.type == 'add subjects') {
        return {
            ...store,
            subjects: [...action.payload],
        }
    }

    if (action.type == 'login user') {
        return {
            ...store,
            user: {...action.payload},
        }
    }

    if (action.type == 'logout user') {
        return {
            ...store,
            user: {},
        }
    }

    return store;
};

export default rootReducer;