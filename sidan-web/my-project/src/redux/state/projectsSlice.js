import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [],
    projectDetails: null,
    error: null,
    loading: false,
}

const projectSlice = createSlice({ 
     name: 'projects',
     initialState,
     reducers: {
        addProjectStarted: (state) => {
            state.loading = true;
        },
        addProjectSuccess: (state, action) => {
            state.projects.push(action.payload);
            state.loading = false;
            state.error = null;
        },
        addProjectFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false
        },

        addProjectDetailsStarted: (state) => {
            state.loading = true;
        },
        addProjectDetailsSuccess: (state, action) => {
            state.projectDetails = action.payload;
            state.loading = false;
            state.error = null;
        },
        addProjectDetailsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        
     }
})

export const {
    addProjectStarted,
    addProjectSuccess,
    addProjectFailure,

    addProjectDetailsStarted,
    addProjectDetailsSuccess,
    addProjectDetailsFailure,
  } = projectSlice.actions;

export default projectSlice.reducer;