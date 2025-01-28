import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, credentials, navigate) => {
    dispatch(loginStart()); // Set the state to loading
    try {
        // Use credentials for the API request
        const res = await axios.post("http://localhost:5000/api/auth/login", credentials);

        // Dispatch loginSuccess with the response data
        dispatch(loginSuccess(res.data));
        console.log(res.data);

        // Navigate to the home route
        navigate("/");
    } catch (err) {
        // Dispatch loginFailure in case of an error
        dispatch(loginFailure());
    }
};

