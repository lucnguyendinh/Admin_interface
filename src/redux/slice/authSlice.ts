import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
    condition: Condition;
    value: AuthState;
};

type Condition = {
    loading: Boolean;
    success: Boolean;
    error: Boolean;
};

type AuthState = {
    isAuth: Boolean;
    userName: string;
    uid: string;
    isModerator: Boolean;
};

const initialState: InitialState = {
    condition: {
        loading: false,
        success: false,
        error: false,
    },
    value: {
        isAuth: false,
        userName: '',
        uid: '',
        isModerator: false,
    },
};

//co the gan type ts kieu nay
// const initialState = {
//     value: {
//         isAuth: false,
//         userName: '',
//         uid: '',
//         isModerator: false,
//     } as AuthState,
// } as InitialState;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.condition.loading = true;
        },
        loginSuccess: (state, action: PayloadAction<string>) => {
            return {
                condition: {
                    loading: false,
                    success: false,
                    error: false,
                },
                value: {
                    isAuth: true,
                    userName: action.payload,
                    uid: '2uadfahi2asdfo2',
                    isModerator: false,
                },
            };
        },
        loginFail: (state) => {
            state.condition.loading = false;
            state.condition.error = true;
        },
        logOut: () => {
            return initialState;
        },
    },
});

export const { loginStart, loginSuccess, loginFail, logOut } = authSlice.actions;
export default authSlice.reducer;
