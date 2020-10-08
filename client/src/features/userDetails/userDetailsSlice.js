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
        },
        setContributesOrder(state, {payload}){
            if(payload.length > 0){
                const key = payload.split(' ')[0];
                const order = payload.split(' ')[1];
                state.details.contribute.sort( (a,b) => order==='asc' ? a[key] - b[key] : b[key] - a[key]);
            }
        }
    }
})

export const { setUser, setContributesOrder } = users.actions;

export default users.reducer