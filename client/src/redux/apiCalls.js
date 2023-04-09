import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userReducer";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    const url = 'http://localhost:3400/api/auth/login';
    try {
        const res = await axios.post(url, user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}