import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "./api";
import {toast} from "react-toastify";


const Slice = createSlice({
    name: 'weather',
    initialState: {
        weather: [],
        errMessage: ''
    },
    reducers: {
        getWeatherResponse: (state, action) => {
            state.weather = action.payload
        },
        errWeatherResponse: (state, action) => {
            toast.error(`Shahar nomini noto'g'ri kiritdingiz!`)
        },

    }
})


export const getWeather = (value) => apiCall(
    {
        value,
        onSuccess: Slice.actions.getWeatherResponse.type

    }
)
export const search = (value) => apiCall(
    {
        value,
        onSuccess: Slice.actions.getWeatherResponse.type

    }
)

export default Slice.reducer;

