import { FETCH_USER } from "./types";
import axios from 'axios';

export const fetchUser = () => async dispatch =>  {
    const response = await axios.get('/auth/me')
    dispatch({ type: FETCH_USER, payload: response.data})
}