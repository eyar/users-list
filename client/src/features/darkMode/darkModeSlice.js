import { createSlice } from '@reduxjs/toolkit'

const enabledState = localStorage.getItem('dark-mode-enabled');
const {matches} = window.matchMedia('(prefers-color-scheme: dark)');
const enabled = typeof enabledState !== 'undefined' ? eval(enabledState) : matches;

const darkModeInitialState = {
    darkMode: enabled
}

const darkMode = createSlice({
    name: 'darkMode',
    initialState: darkModeInitialState,
    reducers: {
        toggleDarkMode(state, payload){
            console.log(state.darkMode);
            state.darkMode = !state.darkMode;
            console.log(state.darkMode);
            if(state.darkMode) document.body.classList.add('dark-mode');
            else document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode-enabled', state.darkMode);
        }
    }
});

export const { toggleDarkMode } = darkMode.actions;

export default darkMode.reducer;
