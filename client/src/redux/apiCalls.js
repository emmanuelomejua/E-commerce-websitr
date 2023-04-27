import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userReducer";
import { loginRoute } from "../utils/APIcalls";

export const login = async (dispatch, user) => {

    dispatch(loginStart());
    try {
        const res = await axios.post(loginRoute, user)
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const logout = async (dispatch, user) => {
    dispatch(logout, user)
}