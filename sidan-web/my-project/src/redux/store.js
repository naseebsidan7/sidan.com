import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import themeReducer from "./state/modeSlice";
import projectsReducer from "./state/projectsSlice";
import adminReducer from "./state/adminSlice";


const rootReducer = combineReducers({ theme: themeReducer, projects: projectsReducer, admin: adminReducer })

const persistConfig = { key: 'root', storage, version: 1, whitelist: ['theme', 'projects', 'admin']}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>  
        getDefaultMiddleware({  serializableCheck: {
                    ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
                }
        })  
})

export const persistor = persistStore(store)