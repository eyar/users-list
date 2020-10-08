import { createSlice } from '@reduxjs/toolkit';

const usersInitialState = {
    details: {},
}

const users = createSlice({
    name: 'userDetails',
    initialState: usersInitialState,
    reducers: {
        setUser(state, { payload }) {
            state.details = payload;
        }
    }
})

export const { setUser } = users.actions;

export default users.reducer