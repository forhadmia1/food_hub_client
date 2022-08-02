import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCarts = createAsyncThunk('carts/fetchCarts', async () => {
    const res = await axios.get('http://localhost:5000/order')
    return res.data;
})

export const addToCarts = createAsyncThunk('carts/fetchCarts', async (data) => {
    const res = await axios.post('http://localhost:5000/order', data)
    return res.data;
})

const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        isLoading: false,
        carts: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCarts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCarts.fulfilled, (state, action) => {
            state.isLoading = false
            state.carts = action.payload
            state.error = null
        })
        builder.addCase(fetchCarts.rejected, (state, action) => {
            state.isLoading = false
            state.carts = []
            state.error = action.error.message
        })
    }
})

export default cartSlice.reducer;