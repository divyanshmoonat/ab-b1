const userState = {
    name: "John",
    mobNo: "9999999999"
};

const userReducer = (state = userState, action) => {
    console.log(state, action);
    if (action.type === "UPDATE_NAME") {
        // state.name = action.payload; // Incorrect way (State is read only)
        const newState = {
            ...state,
            name: action.payload
        };
        return newState;
    } else if (action.type === "UPDATE_MOBNO") {
        const newState = {
            ...state,
            mobNo: action.payload
        };
        return newState;
    }
    return state;
};

export default userReducer;