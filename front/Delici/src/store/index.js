import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './product'
import  authSlice  from './auth'

export const store = configureStore({
  reducer: {
    product:productSlice,
    auth:authSlice
  },
})