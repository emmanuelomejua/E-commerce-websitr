import { createSlice } from "@reduxjs/toolkit";

const userSice = createSlice({
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
        }
    }
})

export const { loginStart, loginSuccess, loginFailure } = userSice.actions;
export default userSice.reducer
