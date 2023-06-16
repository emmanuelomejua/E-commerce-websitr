import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./userReducer";
import { loginRoute } from "../utils/APIcalls";

export const login = async (dispatch, user) => {

    dispatch(loginStart());
    try {
        const res = await axios.post(loginRoute, user)
        dispatch(loginSuccess(res.data)) && window.location.replace('/')
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const Logout = async (dispatch, user) => {
    dispatch(logout())
}
