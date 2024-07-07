import { configureStore } from '@reduxjs/toolkit';
import cities from '../components/choose-city/ChooseCitySlice'

const store = configureStore({
    reducer: {cities},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
})

export default store;