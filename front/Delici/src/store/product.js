import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk("getProducts", async () => { // action 
  try {
    const res = await axios.get("http://localhost:7000/products");
    console.log(res.data);
    return res.data; // action.payload
  } catch (error) {
    console.log(error);
  }
});










export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {}, // t7ottch feha async functions
  extraReducers: (builder) => { // t7ot feha async functions
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

   
  },
});
export default productSlice.reducer;
