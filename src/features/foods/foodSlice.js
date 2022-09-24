import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFoods = createAsyncThunk('foods/fetchFoods', async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/foods`);
    return res.data;
})

const foodSlice = createSlice({
    name: 'foods',
    initialState: {
        isLoading: false,
        allFoods: [],
        foods: [],
        error: null
    },
    reducers: {
        getCategory: (state, action) => {
            if (action.payload) {
                const result = state.allFoods.filter(food => food.category === action.payload)
                state.foods = result;
            } else {
                state.foods = state.allFoods
            }
        },
        searchFood: (state, action) => {
            const result = [];
            state.allFoods.forEach(food => {
                if (food.name.toLowerCase().includes(action.payload.toLowerCase())) {
                    result.push(food)
                }
            })
            state.foods = result
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoods.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchFoods.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allFoods = action.payload;
            state.foods = action.payload;
            state.error = null;
        })
        builder.addCase(fetchFoods.rejected, (state, action) => {
            state.isLoading = false;
            state.allFoods = [];
            state.foods = [];
            state.error = action.error.message;
        })
    },
})

export const { getCategory, searchFood } = foodSlice.actions;
export default foodSlice.reducer;