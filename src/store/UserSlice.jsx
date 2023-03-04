import { createSlice } from "@reduxjs/toolkit";
const userSlices = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
            console.log(action.payload, "data in slice")
        },

        removeUser(state, action) {
            const id = state.payload;
            // state.splice(action.payload,1);
            state.splice(id, 1);

        },


        DeleteAllUser(State, action) {
            console.log("hello users");
            return [];

        },
    }
});

export default userSlices.reducer;
export const { addUser, removeUser,DeleteAllUser} = userSlices.actions;