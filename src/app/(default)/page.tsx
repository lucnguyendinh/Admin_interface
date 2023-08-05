'use client';
import { loginUser } from '@/redux/api/apiRequestion';
import { logOut } from '@/redux/slice/authSlice';
import { plus } from '@/redux/slice/testSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Page() {
    const dispatch = useDispatch<AppDispatch>();
    const name = useAppSelector((state) => state.persistedReducer.authReducer.value.userName);
    const number = useAppSelector((state) => state.testReducer.value.number);
    const [username, setUsername] = useState<string>('');

    const handleLogin = () => {
        loginUser(dispatch, username);
    };
    const handleLogout = () => {
        dispatch(logOut());
    };
    const handlePlus = () => {
        dispatch(plus());
    };
    return (
        <div className="wrapper">
            <h1 onClick={handleLogin}>Login</h1>
            <h1 onClick={handleLogout}>Logout</h1>
            <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" />
            <h1 style={{ marginBottom: '100px' }}>Username: {name}</h1>
            <h1 onClick={handlePlus}>Plus</h1>
            <h1>Gia tri hien tai: {number}</h1>
        </div>
    );
}
