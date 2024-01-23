import { createSlice } from "@reduxjs/toolkit";
import { createUser, login } from "../thunks/userThunk";

const user = {
    isLoading: false,
    loggedIn: false,
    isRegistered: false,
    logged: [],
    data: []
}
const userSlice = createSlice({
    name: 'user',
    initialState: user,
    reducers: {},
    extraReducers(builder){
        builder.addCase(createUser.pending, (state)=> {
            state.isLoading = true;
        }),
        builder.addCase(createUser.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isRegistered = true
            state.data.push(action.payload)
        }),
        builder.addCase(createUser.rejected, (state)=> {
            state.isLoading = false
            state.isRegistered = false
        }),
        builder.addCase(login.pending, (state)=> {
            state.isLoading = true
        }),
        builder.addCase(login.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.loggedIn = true,
            state.logged.push(action.payload)

        }),
        builder.addCase(login.rejected, (state)=> {
            state.isLoading = false;
            state.loggedIn = false;
        })
    }
})

export const userReducer = userSlice.reducer;