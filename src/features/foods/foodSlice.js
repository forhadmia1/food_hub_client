import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFoods = createAsyncThunk('foods/fetchFoods', async () => {
    const res = await axios.get('http://localhost:5000/api/v1/foods');
    return res.data;
})

const foodSlice = createSlice({
    name: 'foods',
    initialState: {
        isLoading: false,
        foods: [],
        error: null
    },

    extraReducers: (builder) => {
        builder.addCase(fetchFoods.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchFoods.fulfilled, (state, action) => {
            state.isLoading = false;
            state.foods = action.payload;
            state.error = null;
        })
        builder.addCase(fetchFoods.rejected, (state, action) => {
            state.isLoading = false;
            state.foods = action.payload;
            state.error = action.error.message;
        })
    }
})

export default foodSlice.reducer;