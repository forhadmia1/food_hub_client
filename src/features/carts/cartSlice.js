import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        carts: JSON.parse(localStorage.getItem("carts")),
        quantity: 0,
        TotalAmount: 0
    },
    reducers: {
        addToCart(state, action) {
            const exist = state.carts.findIndex(item => item._id === action.payload._id)
            if (exist >= 0) {
                state.carts[exist].quantity += 1;
            } else {
                const newitem = { ...action.payload, quantity: 1, }
                state.carts.push(newitem)
            }
        },
        removeFromCart(state, action) {
            const rest = state.carts.filter(item => item._id !== action.payload)
            state.carts = rest
        },
        decreaseQuantity(state, action) {
            const exist = state.carts.findIndex(item => item._id === action.payload._id)
            if (exist >= 0) {
                state.carts[exist].quantity -= 1;
            }
        },
        getTotal(state, action) {
            if (state.carts.length > 0) {
                const all = state.carts.map(cart => cart.price * cart.quantity)
                const total = all.reduce((pre, curr) => pre + curr)
                state.TotalAmount = total;
                state.quantity = state.carts.length
            } else {
                state.TotalAmount = 0;
                state.quantity = 0;
            }
        }
    }
})

export const { getTotal, addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;