import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        loading: false,
        error: false
    },
    reducers: {
        loginStart: (state)=>{
            state.loading = true;
            state.currentUser = false;
        },
        loginSuccess: (state, action)=>{
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state)=>{
            state.loading = false;
            state.error = true
        },
        logout: (state) => {
            state.currentUser = false;
            state.error = false;
            state.loading = false
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer
