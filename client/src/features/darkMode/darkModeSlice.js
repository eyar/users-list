import { createSlice } from '@reduxjs/toolkit'

const enabledState = localStorage.getItem('dark-mode-enabled');
const {matches} = window.matchMedia('(prefers-color-scheme: dark)');
console.log(enabledState);
console.log(matches);
const enabled = enabledState ? enabledState : matches;

if(enabled) document.body.classList.add('dark-mode');

const darkModeInitialState = {
    darkMode: enabled
}

const darkMode = createSlice({
    name: 'darkMode',
    initialState: darkModeInitialState,
    reducers: {
        toggleDarkMode(state, payload){
            state.darkMode = !state.darkMode;
            if(state.darkMode) document.body.classList.add('dark-mode');
            else document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode-enabled', state.darkMode);
        }
    }
});

export const { toggleDarkMode } = darkMode.actions;

export default darkMode.reducer;
