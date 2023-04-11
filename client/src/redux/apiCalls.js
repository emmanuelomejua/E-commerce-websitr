import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userReducer";

export const login = async (dispatch, user) => {
    const url = 'http://localhost:3400/api/auth/login';
    dispatch(loginStart());
    try {
        const res = await axios.post(url, user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}