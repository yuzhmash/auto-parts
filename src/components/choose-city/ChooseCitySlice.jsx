import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    currentCity: "Stockholm",
    dataCities: [],
    citiesLoadingStatus: "idle"
}

export const fetchCities = createAsyncThunk(
    "cities/fetchCities", 
    (request) => {
        return request("http://localhost:3098/city")
    }
)

const cities = createSlice({
    name: "cities",
    initialState, 
    reducers: {
        changeCurrentCity: (state, action) => {
            state.currentCity = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, state => {state.citiesLoadingStatus = 'loading'})
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.dataCities = action.payload
                state.citiesLoadingStatus = "idle"
            })
            .addCase(fetchCities.rejected, (state) => {
                state.citiesLoadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = cities

export default reducer;

export const {changeCurrentCity} = actions;