import { loginFail, loginStart, loginSuccess } from '../slice/authSlice';
import { AppDispatch } from '../store';

export const loginUser = async (dispatch: AppDispatch, name: string) => {
    dispatch(loginStart());
    try {
        //const res = await axios.post('/auth/login')
        //const checked = res.data.userInfo
        dispatch(loginSuccess(name));
    } catch (err: any) {
        dispatch(loginFail());
    }
};
