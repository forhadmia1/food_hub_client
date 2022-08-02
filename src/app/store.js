import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/carts/cartSlice';
import foodSlice from '../features/foods/foodSlice';


const store = configureStore({
    reducer: {
        foods: foodSlice,
        carts: cartSlice
    }
})

export default store;