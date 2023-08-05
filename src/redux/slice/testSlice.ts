import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        number: 0,
    },
};

const testSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        plus: (state) => {
            state.value.number += 1;
        },
    },
});

export const { plus } = testSlice.actions;
export default testSlice.reducer;
