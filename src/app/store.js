import { configureStore } from '@reduxjs/toolkit'
import foodSlice from '../features/foodSlice';


const store = configureStore({
    reducer: {
        foods: foodSlice,
    }
})

export default store;