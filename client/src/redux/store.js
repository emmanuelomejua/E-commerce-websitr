import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/lib/storage';
// import { persistGate } from 'redux-persist/integration/react'

export const store = () => configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer
    }
})