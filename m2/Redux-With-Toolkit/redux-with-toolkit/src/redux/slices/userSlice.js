import { createSlice } from "@reduxjs/toolkit";

const userState = {
    name: "John",
    mobNo: "9999999999"
}

const slice = createSlice({
    name: "USER",
    initialState: userState,
    reducers: {
        updateName(state, action) {
            state.name = action.payload;
        },
        updateMobNo(state, action) {
            state.mobNo = action.payload;
        }
    }
});

export default slice.reducer;

export const { updateMobNo, updateName } = slice.actions;

// {
//     type : "UPDATE_MOBNO",
//     payload: "1111111111"
// }