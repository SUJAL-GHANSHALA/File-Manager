import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer, //rtk query reducer
        auth: authReducer, //auth state
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;