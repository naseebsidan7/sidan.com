import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
      currentAdmin : null,
      error: null,
      loading: false
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentAdmin = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        signOutUserStart: (state) => {
            state.loading = true;
         },
        signOutUserSuccess: (state) => {
            state.currentAdmin = null;
            state.loading = false;
            state.error = null;
        },   
        signOutUserFailure: (state, action) => {
            state.error = action.payload
            state.loading = false;
        }
    }

})


export const  { signInStart,
                signInSuccess,
                signInFailure,
                signOutUserStart,
                signOutUserSuccess,
                signOutUserFailure } = adminSlice.actions;

export default adminSlice.reducer;