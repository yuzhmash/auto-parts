import { configureStore } from '@reduxjs/toolkit';
import cities from '../components/choose-city/ChooseCitySlice'
import cars from "../components/cars-list/CarsListSlice"

const store = configureStore({
    reducer: {cities, cars},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
})

export default store;