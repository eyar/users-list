import { createSlice } from '@reduxjs/toolkit'

const usersInitialState = {
    users: [],
    isLoading: false,
    error: null
  }
  
function startLoading(state) {
    state.isLoading = true
}

function loadingFailed(state, action) {
    state.isLoading = false
    state.error = action.payload
}

const data = createSlice({
    name: 'data',
    initialState: usersInitialState,
    reducers: {
        getUsersStart: startLoading,
        getUsersSuccess(state, { payload }) {
            state.isLoading = false
            state.error = null
            state.users = payload;
        },
        getUsersFailure: loadingFailed,
        removeUser(state, {payload: targetId}){
            state.users = state.users.filter(({id}) => id !== targetId);
        },
        updateUser(state, {payload}){
            const index = state.users.findIndex(({id}) => id === payload.id)
            state.users[index] = payload;
        }
    }
})

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
    removeUser,
    updateUser
} = data.actions;

export default data.reducer

export const fetchUsers = () => async dispatch => {
    try {
        dispatch(getUsersStart());
        const users = await getUsers();
        dispatch(getUsersSuccess(users));
    } catch (err) {
        dispatch(getUsersFailure(err.toString()));
    }
}

export async function getUsers() {
    const data = await fetch('http://localhost:5588/mocking_G/generate?library=users&category=users&amount=100').then(res=>res.json());
    return data;
}