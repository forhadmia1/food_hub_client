import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCarts = createAsyncThunk('carts/fetchCarts', async () => {
    const res = await axios.get('http://localhost:5000/api/v1/order')
    return res.data;
})

export const addToCarts = createAsyncThunk('carts/addToCarts', async (data) => {
    const res = await axios.post('http://localhost:5000/api/v1/order', data)
    return res.data;
})

export const removeFromCarts = createAsyncThunk('carts/removeFromCarts', async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/v1/order/${id}`)
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
        builder.addCase(addToCarts.fulfilled, (state, action) => {
            state.carts = [...state.carts, action.payload]
        })
        builder.addCase(removeFromCarts.fulfilled, (state, action) => {
            const id = action.payload;
            const rest = state.carts.filter(item => item._id !== id);
            state.carts = rest;
        })
    }
})

export default cartSlice.reducer;