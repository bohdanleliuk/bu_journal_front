
const initialStore = {
    subjects: [],
};

const rootReducer = (store = initialStore, action) => {
    if (action.type == 'add subjects') {
        return {
            ...store,
            subjects: [...action.payload],
        }
    }
    return store;
};

export default rootReducer;