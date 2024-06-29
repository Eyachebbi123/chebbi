import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './product'
import  categorySlice  from './category'
import  authSlice  from './auth'

export const storeApp = configureStore({
  reducer: {
    product:productSlice,
    category:categorySlice,
    auth:authSlice,
  },
})