import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './product'
import  categorySlice  from './category'

export const store = configureStore({
  reducer: {
    product:productSlice,
    category:categorySlice
  },
})