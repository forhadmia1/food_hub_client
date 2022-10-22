import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFoods = createAsyncThunk('foods/fetchFoods', async (endPoint) => {
    const res = await axios.get(`https://foodhub-pi.vercel.app/api/v1/foods${endPoint}`);
    return res.data;
})

const foodSlice = createSlice({
    name: 'foods',
    initialState: {
        isLoading: false,
        allFoods: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoods.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchFoods.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allFoods = action.payload;
            state.error = null;
        })
        builder.addCase(fetchFoods.rejected, (state, action) => {
            state.isLoading = false;
            state.allFoods = [];
            state.error = action.error.message;
        })
    },
})

export default foodSlice.reducer;