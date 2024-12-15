import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      mode: 'light',
}

const modeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: {
        toggleMode : (state) => {
            state.mode = state.mode === 'light'? 'dark' : 'light';
        }
    },

})


export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
