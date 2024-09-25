import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    currentCarName: "",
    dataCars: [],
    dataPopularCars: [],
    carsLoadingStatus: "idle"
}

export const fetchCars = createAsyncThunk(
    "cars/fetchCars", 
    (request) => {
        return request("http://localhost:3098/cars")
    }
)

export const fetchPopularCars = createAsyncThunk(
    "cars/fetschPopularCars",
    (request) => {
        return request("http://localhost:3098/popularCars")
    }
)

const cars = createSlice({
    name: "cars",
    initialState, 
    reducers: {
        addCurrentCarName: (state, action) => {
            state.currentCarName = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, state => {state.carsLoadingStatus = 'loading'})
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.dataCars = action.payload
                state.carsLoadingStatus = "idle"
            })
            .addCase(fetchCars.rejected, (state) => {
                state.carsLoadingStatus = 'error'
            })
            .addCase(fetchPopularCars.pending, state => {state.carsLoadingStatus = 'loading'})
            .addCase(fetchPopularCars.fulfilled, (state, action) => {
                state.dataPopularCars = action.payload
                state.carsLoadingStatus = "idle"
            })
            .addCase(fetchPopularCars.rejected, (state) => {
                state.carsLoadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = cars

export default reducer;

export const {addCurrentCarName} = actions;